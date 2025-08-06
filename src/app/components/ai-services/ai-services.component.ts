import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ai-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ai-services.component.html',
  styleUrls: ['./ai-services.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AiServicesComponent {

}