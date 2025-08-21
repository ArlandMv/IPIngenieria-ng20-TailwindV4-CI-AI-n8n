import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  tagline = 'Transformando empresas con soluciones TI confiables y soporte continuo.';
  quickLinks = ['Servicios', 'Consultoría', 'Políticas de Privacidad', 'Contacto vía WhatsApp'];
  socialLinks = ['LinkedIn', 'WhatsApp', 'GitHub'];

  linkHref(label: string): string {
    const map: Record<string, string> = {
      'Servicios': '#it-services',
      'Consultoría': '#consulting-services',
      'Políticas de Privacidad': '#',
      'Contacto vía WhatsApp': 'https://wa.me/'
    };
    return map[label] || '#';
  }

  socialHref(label: string): string {
    const map: Record<string, string> = {
      'LinkedIn': 'https://www.linkedin.com/',
      'WhatsApp': 'https://wa.me/',
      'GitHub': 'https://github.com/'
    };
    return map[label] || '#';
  }

}