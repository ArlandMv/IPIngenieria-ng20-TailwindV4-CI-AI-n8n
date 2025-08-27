import { Component } from '@angular/core';

interface SuccessCase {
  quote: string;
  author: string;
  title: string;
  image: string;
}
@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.html',
  styles: ``
})
export class Testimonials {
  public successCases: SuccessCase[] = [
    {
      quote: 'IPIngeniería.net transformó completamente nuestra operación. La implementación de sus soluciones de IA redujo nuestros tiempos de respuesta en un 70% y automatizó procesos que nos tomaban horas semanales.',
      author: 'María Castro',
      title: 'Gerente de Operaciones, TechSolutions SA',
      image: 'https://placehold.co/48x48/f59e0b/ffffff?text=MC'
    },
    {
      quote: 'Gracias a la consultoría de IPIngeniería.net, pudimos optimizar nuestra infraestructura de TI y mejorar significativamente la seguridad de nuestros datos. Su equipo es altamente profesional y capacitado.',
      author: 'Juan Pérez',
      title: 'Director de TI, Global Corp',
      image: 'https://placehold.co/48x48/10b981/ffffff?text=JP'
    }
  ];
}
