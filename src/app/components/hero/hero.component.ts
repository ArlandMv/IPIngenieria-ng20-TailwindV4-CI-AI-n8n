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
}