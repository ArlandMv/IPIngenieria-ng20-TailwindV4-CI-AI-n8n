import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-problemas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './problemas.component.html',
  styleUrl: './problemas.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProblemasComponent {}