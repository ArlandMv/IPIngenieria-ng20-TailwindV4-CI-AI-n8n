import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-consulting-services',
  imports: [CommonModule],
  templateUrl: './consulting-services.html',
  styles: ``,
})
export class ConsultingServices {
  title = 'Consultoría Estratégica';
  items = [
    'Soluciones Web: Desarrollo y Optimización de sitios y applicaciones digitales.',
    'Internet de las cosas IoT: Integración de dispositivos inteligentes para monitoreo y eficiencia.',
    'Inteligencia Artificial: Asesoría en adopción gradual de IA para procesos clave ML y LLMs.',
  ];
  learn_more = [
    'Soluciones web modernas, desde e‑commerce hasta plataformas digitales, diseñadas para maximizar la conversión y ofrecer experiencias de usuario excepcionales. Incluye el desarrollo y optimización integral de sitios y sistemas adaptados a las necesidades y objetivos de cada proyecto.',
    'Implementación de ecosistemas IoT que recopilan y analizan datos en tiempo real para mejorar la eficiencia, reducir costos y habilitar nuevas capacidades operativas. Incluye el diseño, integración y mantenimiento de dispositivos, sensores y plataformas conectadas, adaptadas a las necesidades y objetivos estratégicos de cada organización.',
    'Diseño de un roadmap personalizado para la adopción de inteligencia artificial, incorporando automatización de procesos y optimización operacional. Asesoría estratégica para la implementación gradual de IA en procesos clave, impulsando eficiencia y transformación digital sostenible.',
  ];

  public itSvg = `
 <svg
 class="h-8 w-8 text-primary-50"
 fill="none"
 stroke="currentColor"
 viewBox="0 0 24 24"
 id="iot-svg"
 >
 <path
 stroke-linecap="round"
 stroke-linejoin="round"
 stroke-width="2"
 d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
 ></path>
 </svg>
 `;

  public webSvg = `
 <svg class="h-8 w-8 text-primary-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="web-svg">
 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"></path>
 </svg>
 `;

  public aiSvg = `
 <svg class="h-8 w-8 text-primary-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="ai-svg">
 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
 </svg>
 `;

  getSvg(item: string): string {
    if (item.includes('IoT')) {
      return this.itSvg;
    } else if (item.includes('Web')) {
      return this.webSvg;
    } else if (item.includes('Inteligencia Artificial')) {
      return this.aiSvg;
    }
    return this.itSvg; // Return empty string or a default SVG if no match
  }
  // Optimization suggestion: For better performance with a large number of items,
  // consider pre-processing the 'items' array in the component's initialization
  // to include the appropriate SVG string directly in each item object. This avoids
  // recalculating the SVG for every item during every change detection cycle.
  // For example:
  // ngOnInit() {
  //   this.processedItems = this.items.map(item => ({
  //     text: item,
  //     svg: this.getSvg(item)
  //   }));
  // }
  // Then use processedItems in your template and bind [innerHtml] to item.svg
}
