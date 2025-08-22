import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators,  } from '@angular/forms';
import Swal from 'sweetalert2';
import { Email } from '../../services/email';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css'
})
// TODO:
// - Improve loading and error handling.
// - Improve the accessibility of the form.
export class ContactForm {
  private emailService = inject(Email);
  //private fb = inject(FormBuilder);
  contactForm: FormGroup = inject(FormBuilder).group({
    name: ['', [Validators.required,Validators.minLength(3)]], //Validators.maxLength(50)
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    //phone: ['', [Validators.required, Validators.pattern('^[0-9+\\-()\\s]+$')]],
    phone: ['', Validators.required],
    message: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(300)]]
  });

  /*
  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', Validators.required],
  });
  */
  
  public loading = signal(false);
  public error = signal<string | null>(null);

  onSubmit() {
    if (this.contactForm.valid) {
      this.loading.set(true);
      this.error.set(null);

      // preparing to send the data to the API service
      const formData = this.contactForm.value;
      console.log('Form being submitted:', this.contactForm.value);
      this.emailService.sendContactForm(formData)
      .then((response) => {
        console.log('Email sent successfully:', response);
        this.loading.set(false);
        const audio = new Audio('notification.wav');
        audio.play();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Solicitud enviada con Exito",
          showConfirmButton: false,
          timer: 1500
        });
        this.contactForm.reset();
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        this.loading.set(false);
        this.error.set('Error sending email. Please try again later.');
      });
    } else {
      //this code should be unreachable beacuse of form validation
      this.error.set('Please fill in all required fields.');
    }
  }
}
