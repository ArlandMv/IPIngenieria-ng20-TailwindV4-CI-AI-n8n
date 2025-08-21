import { Component } from '@angular/core';
//import * as data from 'public/json/initial.json';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styles: ``,
})
export class About {
  public title_about = 'Quiénes Somos';
  public description_about =
    'En IP Ingeniería conectamos a las empresas con soluciones tecnológicas confiables y un soporte continuo que asegura la continuidad operativa y la seguridad de sus sistemas.';
}
