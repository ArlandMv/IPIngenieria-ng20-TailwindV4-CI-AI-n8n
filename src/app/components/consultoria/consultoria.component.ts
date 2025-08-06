import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-consultoria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consultoria.component.html',
  styleUrl: './consultoria.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConsultoriaComponent {

}