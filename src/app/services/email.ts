import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Email {
  private readonly SERVICE_ID = environment.emailjs.serviceId;
  private readonly TEMPLATE_ID = environment.emailjs.templateId;
  private readonly USER_ID = environment.emailjs.userId; 
  private readonly PUBLIC_KEY = environment.emailjs.publicKey; 
  
  constructor() {
    emailjs.init(this.PUBLIC_KEY);
    // test it, it should run once
  }

  /* INTERFASE
  var templateParams = { 
    name: 'James',
    notes: 'Check this out!',
  };*/

  // Wrapper method for sending email
  async sendContactForm(params: any): Promise<EmailJSResponseStatus> {
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

  //"simpler" way
  simplerSendContactForm(params: any): Promise<EmailJSResponseStatus> {
    return emailjs.send(
      this.SERVICE_ID,
      this.TEMPLATE_ID,
      params
    );
  }
}

// TODO: read on Key metrics to watch:
// - Transactional deliverability ≥ 99%
// - Marketing open rate ≥ 20%
// - Unsubscribe rate ≤ 0.2%
// - Cost per thousand emails (CPM) within budgeted thresholds

//print(default_api.natural_language_write_file(path = "src/app/components/contact-form/contact-form.ts", prompt = "Inject the EmailService into the ContactForm component. In the onSubmit method, call the emailService.sendContactForm method with the form value. Add signals for 'loading' (boolean) and 'error' (any) and update them based on the promise returned by sendContactForm. Handle the success case by showing the SweetAlert and resetting the form, and the error case by updating the error signal.", language = "typescript"))
