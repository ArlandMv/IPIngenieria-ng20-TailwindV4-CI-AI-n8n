import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-call-to-action',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './call-to-action.component.html',
  //template: `<app-call-to-action [message]="testMessage()" [buttonText]="testButtonText()"></app-call-to-action>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CallToActionComponent {
  //testMessage = input<string>('Default Call to Action Message');
  //testButtonText = input<string>('Click Me');
}