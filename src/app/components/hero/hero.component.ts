import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  titles = [
    {title: " Soluciones integrales de TI e IA para PYMEs digitales ", subtitle: "Fusionamos infraestructura TI y la última generación de IA para impulsar tu crecimiento en Latinoamérica."},
    {title: " TI y IA al servicio de PYMEs en transformación ", subtitle: "Combinamos experiencia en tecnologías de la información con soluciones de inteligencia artificial para modernizar tu empresa."},
    {title: " PYMEs 4.0: TI e IA para un futuro digital ", subtitle: " Diseñamos e implementamos estrategias de TI e IA a medida para que tu negocio lidere la era digital."}
  ]
}
