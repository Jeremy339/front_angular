import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';
import { MessageService } from '../../services/message.service'; // Asegúrate de que la ruta es correcta

@Component({
  selector: 'messages-basic-demo',
  templateUrl: './mensajes.component.html',
})
export class MensajesComponent implements OnInit {
  messages: Message[] = [];

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    // Mensajes predefinidos
    this.messages = [
      { severity: 'info', detail: 'Info Message' },
      { severity: 'success', detail: 'Success Message' },
      { severity: 'warn', detail: 'Warning Message' },
      { severity: 'error', detail: 'Error Message' },
      { severity: 'secondary', detail: 'Secondary Message' },
      { severity: 'contrast', detail: 'Contrast Message' }
    ];

    // Suscribirse a nuevos mensajes del servicio
    this.messageService.message$.subscribe((message: Message) => {
      console.log(`Received message: ${message.severity} - ${message.detail}`);
      this.messages.push(message);
    });
  }
}