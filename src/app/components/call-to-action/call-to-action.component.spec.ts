import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallToActionComponent } from './call-to-action.component';

describe('CallToActionComponent', () => {
  let component: CallToActionComponent;
  let fixture: ComponentFixture<CallToActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallToActionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallToActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/*
describe('CallToActionComponent', () => {
  let component: CallToActionComponent;
  let fixture: ComponentFixture<CallToActionComponent>;
  let testHost: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallToActionComponent, TestHostComponent], // Import both components
    }).compileComponents();

    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHost = testHostFixture.componentInstance;
    fixture = TestBed.createComponent(CallToActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // Verifies that the CallToActionComponent can be successfully created.
    expect(component).toBeTruthy();
  });

  it('should display the input message', () => {
    // This test checks if the component displays the message passed via input.
    const testMessage = 'New Call to Action Message';
    testHost.testMessage.set(testMessage);
    testHostFixture.detectChanges();
    const compiled = testHostFixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain(testMessage);
  });

  it('should display the input button text', () => {
    // This test checks if the component displays the button text passed via input.
    const testButtonText = 'Buy Now!';
    testHost.testButtonText.set(testButtonText);
    testHostFixture.detectChanges();
    const compiled = testHostFixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain(testButtonText);
  });

  // TODO: Add test for button click and output event emitter
  // it('should emit an event when the button is clicked', () => {
  //   // Test that the output event is emitted when the button is clicked.
  // });
});
*/