import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators,  } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css'
})
export class ContactForm {
  // TODO:
  // - Create a service for the API call.
  // - Implement loading and error handling.
  // - Add more advanced form validation.
  // - Improve the accessibility of the form.

  contactForm: FormGroup = inject(FormBuilder).group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });
  onSubmit() {
    if (this.contactForm.valid) {
      // Here you could send the data to your API
      console.log('Form submitted:', this.contactForm.value);
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
    }
  }
}
