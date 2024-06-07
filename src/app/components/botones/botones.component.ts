import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service'; // Asegúrate de que la ruta es correcta
import { Message } from 'primeng/api';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.scss']
})
export class BotonesComponent {
  messages: Message[] = [];

  showMessage(label: string) {
    let message: Message = {};
    switch (label) {
      case 'Primary':
        message = { severity: 'info', summary: 'Primary Button', detail: 'This is a primary button' };
        break;
      case 'Secondary':
        message = { severity: 'info', summary: 'Secondary Button', detail: 'This is a secondary button' };
        break;
      case 'Success':
        message = { severity: 'success', summary: 'Success Button', detail: 'This is a success button' };
        break;
      case 'Info':
        message = { severity: 'info', summary: 'Info Button', detail: 'This is an info button' };
        break;
      case 'Warning':
        message = { severity: 'warn', summary: 'Warning Button', detail: 'This is a warning button' };
        break;
      case 'Help':
        message = { severity: 'info', summary: 'Help Button', detail: 'This is a help button' };
        break;
      case 'Danger':
        message = { severity: 'error', summary: 'Danger Button', detail: 'This is a danger button' };
        break;
      case 'Contrast':
        message = { severity: 'info', summary: 'Contrast Button', detail: 'This is a contrast button' };
        break;
      default:
        message = {};
    }
    this.messages = [message];
  }
}