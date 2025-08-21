import { Component } from '@angular/core';

@Component({
  selector: 'app-how-we-help',
  imports: [],
  templateUrl: './how-we-help.html',
  styles: ``
})
export class HowWeHelp {
  title = 'Cómo Impulsamos tu Empresa';
  benefits = [
    'Mejoramos tu conectividad para que tu equipo siempre esté en línea.',
    'Fortalecemos tu seguridad con soluciones integradas de acceso y monitoreo.',
    'Aseguramos continuidad operativa con soporte y mantenimiento proactivo.',
    'Optimizamos tus recursos tecnológicos para mayor eficiencia y rentabilidad.'
  ];
}
