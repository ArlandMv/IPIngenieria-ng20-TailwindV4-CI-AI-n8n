import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Step {
  step: string;
  description: string;
}

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './how-it-works.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HowItWorksComponent {
  title = 'Nuestro Proceso de Trabajo';
  subtitle =
    'Un proceso estructurado de 3 etapas para garantizar el éxito de su transformación digital';
  steps: Step[] = [
    {
      step: 'Diagnóstico',
      description:
        'Analizamos tu infraestructura actual y detectamos oportunidades de mejora.',
    },
    {
      step: 'Implementación',
      description:
        'Diseñamos e instalamos soluciones personalizadas adaptadas a tu negocio.',
    },
    {
      step: 'Monitoreo & Optimización',
      description:
        'Supervisamos y mejoramos continuamente tus sistemas para garantizar el máximo rendimiento.',
    },
  ];
}
