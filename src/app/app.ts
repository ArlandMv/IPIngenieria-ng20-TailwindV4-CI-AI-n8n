import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProblemasComponent } from './components/problemas/problemas.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { Testimonials } from './components/testimonials/testimonials';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { ConsultoriaComponent } from './components/consultoria/consultoria.component';
//import { AiServicesComponent } from './components/ai-services/ai-services.component';
import { ContactForm } from './components/contact-form/contact-form';
import { ServicesIt } from './components/services-it/services-it';
import { Testimonials2 } from './components/testimonials2/testimonials2';
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
    ProblemasComponent,
    //CallToActionComponent,
    PricingComponent,
    Testimonials,
    Testimonials2,
    HowItWorksComponent,
    ConsultoriaComponent,
    //AiServicesComponent,
    ServicesIt,
    ContactForm,
    FooterComponent,
    About,
    Services,
    ConsultingServices,
    HowWeHelp,
    Testimonials3
],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly title = signal('myapp');
}
