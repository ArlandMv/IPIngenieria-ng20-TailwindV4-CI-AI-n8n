import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from '../../environments/environment';

export interface EmailParams {
  name: string;
  email: string;
  subject: string;
  phone: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class Email {
  private readonly SERVICE_ID = environment.emailjs.serviceId;
  private readonly TEMPLATE_ID = environment.emailjs.templateId;
  private readonly PUBLIC_KEY = environment.emailjs.publicKey; 
  
  constructor() {
    emailjs.init(this.PUBLIC_KEY);
  }


  /**
   * Sends a contact form email using EmailJS.
   *
   * @param params - The parameters for the email, conforming to the EmailParams interface.
   * @returns A promise that resolves with the EmailJS response status upon successful sending.
   * @throws An error if the email sending fails.
   */
  async sendContactForm(params: Record<string, unknown>): Promise<EmailJSResponseStatus> {
    try {
      const response = await emailjs.send(
        this.SERVICE_ID,
        this.TEMPLATE_ID,
        params
      );
      console.log('Email successfully sent!', response.status, response.text);
      return response;
    } catch (error) {
      console.error('Failed to send email:', error);
      throw error; // Re-throw to be handled by the component
    }
  }
}

// TODO: read on Key metrics to watch:
// - Transactional deliverability ≥ 99%
// - Marketing open rate ≥ 20%
// - Unsubscribe rate ≤ 0.2%
// - Cost per thousand emails (CPM) within budgeted thresholds

//print(default_api.natural_language_write_file(path = "src/app/components/contact-form/contact-form.ts", prompt = "Inject the EmailService into the ContactForm component. In the onSubmit method, call the emailService.sendContactForm method with the form value. Add signals for 'loading' (boolean) and 'error' (any) and update them based on the promise returned by sendContactForm. Handle the success case by showing the SweetAlert and resetting the form, and the error case by updating the error signal.", language = "typescript"))
