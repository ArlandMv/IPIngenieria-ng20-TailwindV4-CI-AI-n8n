import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroComponent } from './hero.component';
import { By } from '@angular/platform-browser';

describe('HeroComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the main heading', () => {
    // Checks if the main heading text is present in the template.
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('span')?.textContent).toContain(
      'Soluciones de',
    );
  });

  it('should display the description text', () => {
    // Checks if the description text is present in the template.
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p.text-xl')?.textContent).toContain(
      'Conectamos la ingeniería tradicional con la inteligencia artificial moderna para impulsar la transformación digital de empresas medianas en Latinoamérica.',
    );
  });

  it('should display the "Solicitar Evaluación" button', () => {
    // Checks if the "Solicitar Evaluación" button is present and has the correct text and href.
    const quoteButton = fixture.debugElement.query(
      By.css('a[href="#contacto"]'),
    );
    expect(quoteButton).toBeTruthy();
    expect(quoteButton.nativeElement.textContent).toContain(
      'Solicitar Evaluación',
    );
  });

  it('should display the "Ver Servicios" button', () => {
    // Checks if the "Ver Servicios" button is present and has the correct text and href.
    const servicesButton = fixture.debugElement.query(
      By.css('a[href="#servicios"]'),
    );
    expect(servicesButton).toBeTruthy();
    expect(servicesButton.nativeElement.textContent).toContain('Ver Servicios');
  });

  it('should display the hero image', () => {
    // Checks if the hero image is present with the correct alt text and src.
    const heroImage = fixture.debugElement.query(
      By.css('img[alt="AI Solutions"]'),
    );
    expect(heroImage).toBeTruthy();
    expect(heroImage.nativeElement.getAttribute('src')).toBe('hero-img.webp');
  });

  it('should display the "AI Activa" status indicator', () => {
    // Checks if the "AI Activa" status indicator text is present
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('AI Activa');
  });

  // Note: Testing the background SVG pattern is omitted as it's purely decorative
});
