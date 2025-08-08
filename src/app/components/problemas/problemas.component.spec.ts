import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';

import { ProblemasComponent } from './problemas.component';

describe('ProblemasComponent', () => {
  let component: ProblemasComponent;
  let fixture: ComponentFixture<ProblemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProblemasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //expect(compiled.querySelector('p.text-3xl')?.textContent).toContain('Problemas que Resolvemos');
  it('should display the main heading title', () => {
    const title = fixture.debugElement.query(By.css('p'));
    expect(title).toBeTruthy();
    expect(title.nativeElement.textContent).toContain('Problemas que Resolvemos');
  });

  it('should display the subtitle', () => {
    // Checks if the subtitle text is present in the template.
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p.text-xl.mx-auto')?.textContent).toContain('Identificamos y solucionamos los desafíos tecnológicos más comunes en empresas medianas');
  });

  it('should display three problem sections', () => {
    // Checks if there are three distinct sections for displaying problems.
    const problemSections = fixture.debugElement.queryAll(By.css('.md\\:grid-cols-3 > div'));
    expect(problemSections.length).toBe(3);
  });

  it('should display the title and description for the first problem', () => {
    // Checks the title and description of the first problem section.
    const firstProblem = fixture.debugElement.query(By.css('.md\\:grid-cols-3 > div:nth-child(1)'));
    expect(firstProblem.nativeElement.textContent).toContain('Conectividad Intermitente');
    expect(firstProblem.nativeElement.textContent).toContain('Problemas de conectividad entre sedes y sucursales que afectan la productividad y comunicación empresarial.');
  });

  it('should display the title and description for the second problem', () => {
    // Checks the title and description of the second problem section.
    const secondProblem = fixture.debugElement.query(By.css('.md\\:grid-cols-3 > div:nth-child(2)'));
    expect(secondProblem.nativeElement.textContent).toContain('Control de Accesos y CCTV');
    expect(secondProblem.nativeElement.textContent).toContain('Sistemas de seguridad desactualizados que requieren modernización y automatización inteligente.');
  });

  it('should display the title and description for the third problem', () => {
    // Checks the title and description of the third problem section.
    const thirdProblem = fixture.debugElement.query(By.css('.md\\:grid-cols-3 > div:nth-child(3)'));
    expect(thirdProblem.nativeElement.textContent).toContain('Procesos Manuales');
    expect(thirdProblem.nativeElement.textContent).toContain('Tareas repetitivas y procesos manuales que pueden automatizarse eficientemente con inteligencia artificial.');
  });

  // Note: Testing the presence and correctness of the embedded SVG icons is omitted
  // as it can be complex and might not provide significant value in a unit test
  // compared to verifying the textual content associated with each problem.
});