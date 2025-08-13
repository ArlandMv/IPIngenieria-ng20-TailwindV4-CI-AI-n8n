import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactForm } from './contact-form';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { Email } from '../../services/email';

describe('ContactForm', () => {
  let component: ContactForm;
  let fixture: ComponentFixture<ContactForm>;

  beforeEach(async () => {
    const emailServiceMock = {
      sendContactForm: jasmine.createSpy('sendContactForm').and.returnValue(Promise.resolve({ status: 200, text: 'OK' }))
    };

    await TestBed.configureTestingModule({
      imports: [ContactForm, ReactiveFormsModule],
      providers: [
        { provide: Email, useValue: emailServiceMock }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form element', () => {
    const formElement = fixture.debugElement.query(By.css('form'));
    expect(formElement).toBeTruthy();
  });

  it('should have name, email, and message input fields', () => {
    const nameInput = fixture.debugElement.query(By.css('input[formControlName="name"]'));
    const emailInput = fixture.debugElement.query(By.css('input[formControlName="email"]'));
    const messageTextarea = fixture.debugElement.query(By.css('textarea[formControlName="message"]'));

    expect(nameInput).toBeTruthy();
    expect(emailInput).toBeTruthy();
    expect(messageTextarea).toBeTruthy();
  });

  it('should have a submit button', () => {
    const submitButton = fixture.debugElement.query(By.css('button[type="submit"]'));
    expect(submitButton).toBeTruthy();
  });

  it('should disable the submit button when the form is invalid', async () => {
    const submitButton = fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement;
    // Initially, the form is invalid because fields are required.
    expect(submitButton.disabled).toBe(true);

    // Mark a field as dirty and set a value to see if the button is still disabled
    const nameInput = component.contactForm.get('name');
    nameInput?.setValue('Test Name');
    nameInput?.markAsDirty();
    fixture.detectChanges();
    expect(submitButton.disabled).toBe(true);

    // Now, let's make the form valid (you'll need to add validators in the component)
    // For now, let's manually set the form as valid for testing purposes
    component.contactForm.get('name')?.setValue('Test Name');
    component.contactForm.get('email')?.setValue('test@example.com');
    component.contactForm.get('subject')?.setValue('Test subject');
    component.contactForm.get('phone')?.setValue('+569 987654321');
    component.contactForm.get('message')?.setValue('Test message');
    fixture.detectChanges();

    // Add validators to the form controls in the component
    // and then this assertion should pass when the form is valid.
    expect(submitButton.disabled).toBe(false);
    
  });

  it('should reset the form after successful submission', async () => {
    // Set valid form data
    component.contactForm.get('name')?.setValue('Test Name');
    component.contactForm.get('email')?.setValue('test@example.com');
    component.contactForm.get('subject')?.setValue('Test subject');
    component.contactForm.get('phone')?.setValue('+569 987654321');
    component.contactForm.get('message')?.setValue('Test message');
    fixture.detectChanges(); 

    // Spy on the form's reset method
    const resetSpy = spyOn(component.contactForm, 'reset');

    // Spy on the EmailService's sendContactForm method
    // (This spy is already set up in the beforeEach block now)
    const sendEmailSpy = (TestBed.inject(Email) as any).sendContactForm;

    // Submit the form
    component.onSubmit();

    // Wait for the async operation (the Promise returned by sendContactForm) to resolve
    await fixture.whenStable();
    fixture.detectChanges(); 

    // Expect the form's reset method to have been called
    expect(sendEmailSpy).toHaveBeenCalledWith(component.contactForm.value);
    expect(resetSpy).toHaveBeenCalled();
  });

  it('should call onSubmit when the form is submitted', () => {
    // Spy on the component's onSubmit method
    const onSubmitSpy = spyOn(component, 'onSubmit');

    // Set valid form data to enable the submit button
    component.contactForm.get('name')?.setValue('Test Name');
    component.contactForm.get('email')?.setValue('test@example.com');
    component.contactForm.get('message')?.setValue('Test message');
    // Detect changes to update the button's disabled state
    fixture.detectChanges(); 

    // Find the form element and trigger the submit event
    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('submit', null);

    // Expect the onSubmit method to have been called
    expect(onSubmitSpy).toHaveBeenCalled();
  });

});
