import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { HeroComponent } from "./components/hero/hero.component";
import { ProblemasComponent } from "./components/problemas/problemas.component";
import { FooterComponent } from "./components/footer/footer.component";
import { PricingComponent } from "./components/pricing/pricing.component";
import { Testimonials } from './components/testimonials/testimonials';
import { HowItWorksComponent } from "./components/how-it-works/how-it-works.component";
import { ConsultoriaComponent } from "./components/consultoria/consultoria.component";
import { AiServicesComponent } from "./components/ai-services/ai-services.component";
import { ContactForm } from "./components/contact-form/contact-form";
import { Clients } from "./components/clients/clients";
import { ServicesIt } from "./components/services-it/services-it";

//import { CallToActionComponent } from "./components/call-to-action/call-to-action.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    //RouterOutlet,
    HeaderComponent,
    HeroComponent,
    ProblemasComponent,
    //CallToActionComponent, 
    FooterComponent,
    PricingComponent,
    Testimonials,
    HowItWorksComponent,
    ConsultoriaComponent,
    AiServicesComponent,
    ContactForm,
    Clients,
    ServicesIt
],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly title = signal('myapp');
}
