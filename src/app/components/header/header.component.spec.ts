import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the logo image', () => {
    // Checks if the logo image element is present in the template
    const logoElement = fixture.debugElement.query(By.css('img[alt="IPIngeniería.net"]'));
    expect(logoElement).toBeTruthy();
  });

  it('should have the correct number of navigation links for desktop', () => {
    // Checks if the correct number of navigation links for the desktop view are present.
    const navLinks = fixture.debugElement.queryAll(By.css('.md\\:block.hidden a'));
    expect(navLinks.length).toBe(5); // Assuming there are 4 navigation links + demo
  });

  it('should have a "Solicitar Demo" button for desktop', () => {
    // Checks if the "Solicitar Demo" button for the desktop view is present.
    const demoButton = fixture.debugElement.query(By.css('.md\\:block.hidden a.bg-primary-500'));
    expect(demoButton).toBeTruthy();
    expect(demoButton.nativeElement.textContent).toContain('Solicitar Demo');
  });

  it('should have a mobile menu button for mobile view', () => {
    // Checks if the mobile menu button is present in the template.
    const mobileMenuButton = fixture.debugElement.query(By.css('.md\\:hidden button'));
    expect(mobileMenuButton).toBeTruthy();
  });
});

/*
Testing the href attributes of the navigation links is intentionally omitted, 
as this is more appropriately tested in an integration test that verifies routing 
or section existence.
*/