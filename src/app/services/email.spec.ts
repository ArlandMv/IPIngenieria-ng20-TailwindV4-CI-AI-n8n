import { TestBed } from '@angular/core/testing';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { EmailParams } from './email';
import { environment } from '../../environments/environment';
import { Email } from './email';

const mockEmailJsSend = jasmine.createSpy('emailjs.send');

const mockEmailJs = {
  init: jasmine.createSpy('emailjs.init'),
  send: mockEmailJsSend,
};

describe('Email', () => {
  let service: Email;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        Email,
        // Provide the mock emailjs
        {
          provide: emailjs,
          useValue: mockEmailJs,
        },
      ],
    });
    spyOn(emailjs, 'init').and.callFake(mockEmailJs.init);
    spyOn(emailjs, 'send').and.callFake(mockEmailJs.send);
    service = TestBed.inject(Email);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call emailjs.send with correct parameters on successful send', async () => {
    const mockParams: Record<string, unknown> = {
      name: 'Test User',
      email: 'test@example.com',
      subject: 'Test Subject',
      phone: '=569 12345678',
      message: 'This is a test message.',
    };
    const mockResponse: EmailJSResponseStatus = { status: 200, text: 'OK' };
    mockEmailJsSend.and.resolveTo(mockResponse);
    //spyOn(emailjs, 'send').and.resolveTo(mockResponse);

    await service.sendContactForm(mockParams);

    expect(mockEmailJsSend).toHaveBeenCalledWith(
      environment.emailjs.serviceId,
      environment.emailjs.templateId,
      mockParams
    );
  });

  /*
  it('should throw an error if emailjs.send fails', async () => {
    const mockError = new Error('failed to send');
    //mockEmailJsSend.and.resolveTo(mockError);
    //spyOn(emailjs, 'send').and.rejectWith(mockError);
    mockEmailJsSend.and.rejectWith(mockError); 
    await expectAsync(service.sendContactForm({} as any)).toBeRejectedWith(
      mockError
    );
  });*/

});
