import { Component } from '@angular/core';

interface Testimonial {
  quote: string;
  author: string;
}

@Component({
  selector: 'app-testimonials3',
  imports: [],
  templateUrl: './testimonials3.html',
  styles: ``,
})
export class Testimonials3 {
  title = 'Clientes';
  subtitle = 'Historias reales de continuidad y eficiencia.';
  testimonials: Testimonial[] = [
    {
      quote:
        'Gracias a IPIngeniería mejoramos la seguridad y conectividad en todas nuestras sedes.',
      author: 'Carlos Macero, Jefe de Proyectos - ACHS',
    },
    {
      quote:
        'La implementación de soluciones de IPIngeniería nos dio estabilidad y tranquilidad en la operación diaria.',
      author: 'Soledad Tapia, Gerente de Finanzas - Valencia Aceros SA',
    },
  ];
}
