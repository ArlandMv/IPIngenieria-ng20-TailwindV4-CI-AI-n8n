import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  signal,
  ElementRef,
  HostListener, ViewChild
} from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent  {
  @ViewChild('mobileMenuButton') mobileMenuButton!: ElementRef<HTMLButtonElement>;
  public isMobileMenuOpen = signal(false);
  public menuItems = signal([
    { label: 'Servicios', href: '#services' },
    { label: 'Clientes', href: '#testimonials' },
    { label: 'Consultoría', href: '#consulting-services' },
    { label: 'Contacto', href: '#contact' },
  ]);
  constructor(private elementRef: ElementRef) {}

  public toggleMobileMenu(): void {
    this.isMobileMenuOpen.set(!this.isMobileMenuOpen());
    // Update aria-expanded attribute
    //this.mobileMenuButton.nativeElement.setAttribute //('aria-expanded', this.isMobileMenuOpen().toString());
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey(event: Event): void { 
    //'event' is defined but never used  
    //KeyboardEvent is no assignable
    if (this.isMobileMenuOpen()) {
      this.toggleMobileMenu();
    }
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent): void {
    if (
      !this.elementRef.nativeElement.contains(event.target) &&
      this.isMobileMenuOpen()
    ) {
      this.toggleMobileMenu();
    }
  }
}
