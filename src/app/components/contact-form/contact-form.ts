import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css'
})
export class ContactForm {
  protected contact = {
    fullName: '',
    company: '',
    email: '',
    service: '',
    description: ''
  };

  protected services = [
    'Consulting',
    'Networking',
    'CCTV',
    'AI automations',
    'Websites',
    'Custom apps'
  ];

  onSubmit(form: NgForm) {
    if (form.valid) {
      // Here you could send the data to your API
      console.log('Form submitted:', this.contact);
      form.resetForm();
    }
  }
}
