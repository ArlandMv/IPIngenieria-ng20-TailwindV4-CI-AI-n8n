import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-consultoria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consultoria.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConsultoriaComponent {

}