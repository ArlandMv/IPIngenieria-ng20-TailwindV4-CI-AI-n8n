import { Component } from '@angular/core';

//type ServiceBlock = { title: string; items: string[] };
interface ServiceBlock {
  title: string;
  items: string[];
}

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styles: ``,
})
export class Services {
  sectionId = 'services';
  subtitle = 'Infraestructura, seguridad y monitoreo para tu operación.';
  infraestructura_redes: ServiceBlock = {
    title: 'Infraestructura & Redes Confiables',
    items: [
      'Enlaces inalámbricos de alta velocidad para comunicación estable incluso a larga distancia.',
      'Redes LAN y WAN corporativas, adaptadas a las necesidades de PYMEs y grandes empresas.',
      'WiFi empresarial con roaming, diseñado para mantener equipos conectados sin interrupciones.',
      'Telefonía IP moderna con menor costo y mayor flexibilidad.',
    ],
  };
  seguridad_control: ServiceBlock = {
    title: 'Seguridad & Control Inteligente',
    items: [
      'CCTV inteligente con monitoreo centralizado.',
      'Control de Acceso (CACC) para oficinas, plantas y edificios.',
      'Integración CACC + CCTV con reconocimiento facial y de patentes.',
    ],
  };
  administracion_monitoreo: ServiceBlock = {
    title: 'Administración & Monitoreo Continuo',
    items: [
      'Administración de servidores, estaciones de trabajo y servicios virtuales.',
      'Monitoreo de recursos críticos: calderas, bombas, iluminación, riego, entre otros.',
      'Soporte preventivo y correctivo, asegurando continuidad y minimizando riesgos.',
    ],
  };
  soluciones_integradas: ServiceBlock = {
    title: 'Soluciones Integradas para Comunidades & Empresas',
    items: [
      'Conectividad centralizada para múltiples servicios: agua potable, dispensadores, coworking, lavandería.',
      'Administración de aplicaciones en red local, optimizando el uso compartido de recursos.',
      'Citofonía IP y WiFi comunal, comunicación y conectividad para todos los usuarios.',
    ],
  };
  blocks(): ServiceBlock[] {
    return [
      this.infraestructura_redes,
      this.seguridad_control,
      this.administracion_monitoreo,
      this.soluciones_integradas,
    ];
  }
}
