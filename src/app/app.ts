import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { ContactForm } from './components/contact-form/contact-form';
import { About } from './components/about/about';
import { FooterComponent } from './components/footer/footer.component';
import { Services } from "./components/services/services";
import { ConsultingServices } from "./components/consulting-services/consulting-services";
import { HowWeHelp } from "./components/how-we-help/how-we-help";
import { Testimonials3 } from "./components/testimonials3/testimonials3";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    //RouterOutlet,
    HeaderComponent,
    HeroComponent,
    //ProblemasComponent,
    //CallToActionComponent,
    //PricingComponent,
    
    HowItWorksComponent,
    //ConsultoriaComponent,
    //AiServicesComponent,
    //ServicesIt,
    About,
    Services,
    ConsultingServices,
    HowWeHelp,
    //Testimonials,
    //Testimonials2,
    Testimonials3,
    ContactForm,
    FooterComponent,
],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly title = signal('myapp');
}
