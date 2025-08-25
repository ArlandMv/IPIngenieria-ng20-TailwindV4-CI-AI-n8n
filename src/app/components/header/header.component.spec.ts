import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { provideRouter } from '@angular/router';
import { routes } from '../../app.routes';
import { By } from '@angular/platform-browser'; 

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [provideRouter(routes)],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the logo image', () => {
    const logoElement = fixture.debugElement.query(
      By.css('img[alt="IPIngeniería.net"]'),
    );
    expect(logoElement).toBeTruthy();
  });

  // Describe block for Desktop tests
  describe('Desktop View', () => {
    beforeEach(() => {
      window.innerWidth = 1024; // Or a different value representing desktop
      window.dispatchEvent(new Event('resize'));
      fixture.detectChanges();
    });

    it('should show desktop menu items', () => {
      // Test for desktop-specific elements or behavior
      const desktopMenu = fixture.debugElement.query(By.css('.desktop-menu'));
      expect(desktopMenu).toBeTruthy();
      // Add more desktop-specific tests here
    });

    it('should hide mobile menu in desktop view', () => {
      const mobileMenu = fixture.nativeElement.querySelector(
        '.mobile-menu ',
      );
      expect(mobileMenu.classList.contains('md:hidden')).toBeTrue();
    });

    /* works in local
    it('should hide mobile menu in desktop view', () => {
      const mobileMenu = fixture.nativeElement.querySelector(
        '.mobile-menu ',
      );
      expect(mobileMenu).toBeTruthy();
      const computedStyle = getComputedStyle(mobileMenu);
      expect(computedStyle.display).toBe('none');
    });
    */

    // More desktop-specific tests
    it('should have a "CallToAction" button for desktop', () => {
      // Checks if the "CallToAction" button for the desktop view is present.
      const demoButton = fixture.debugElement.query(
        By.css('.md\\:block.hidden a.bg-primary-500'),
      );
      expect(demoButton).toBeTruthy();
      expect(demoButton.nativeElement.textContent).toContain(
        'Evaluación Gratuita',
      );
    });
  });

  // MOBILE
  describe('Mobile View', () => {
    beforeEach(() => {
      window.innerWidth = 600;
      window.dispatchEvent(new Event('resize'));
      fixture.detectChanges();
    });

    it('should show mobile menu button', () => {
      const toggleButton = fixture.debugElement.query(By.css('.mobile-menu'));
      expect(toggleButton).toBeTruthy();
    });

    it('should show mobile menu when toggle button is clicked', () => {
      const toggleButton = fixture.nativeElement.querySelector('.mobile-menu');
      toggleButton.click();
      fixture.detectChanges();
      const mobileMenu = fixture.debugElement.query(By.css('.mobile-menu'));
      expect(mobileMenu).toBeTruthy();
    });

    it('should show navigation links when mobile menu is open', () => {
      const toggleButton = fixture.nativeElement.querySelector(
        '.mobile-menu button',
      );
      toggleButton.click(); // Open the menu
      fixture.detectChanges();

      const navLinks = fixture.debugElement.queryAll(
        By.css('.mobile-menu-item'),
      );
      expect(navLinks).toBeTruthy();
      expect(navLinks.length).toBeGreaterThanOrEqual(4);
    });

    it('should hide navigation links when mobile menu is clicked again', () => {
      const toggleButton = fixture.nativeElement.querySelector(
        '.mobile-menu button',
      );
      toggleButton.click(); // Open
      fixture.detectChanges();
      toggleButton.click(); // Close
      fixture.detectChanges();

      const mobileMenuItem = fixture.debugElement.query(
        By.css('.mobile-menu-item'),
      ); // any of them
      expect(mobileMenuItem).toBeNull();
    });

    // More mobile-specific tests
  });
});
