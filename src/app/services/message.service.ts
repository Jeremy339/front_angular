import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Message } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messageSource = new Subject<Message>();
  message$ = this.messageSource.asObservable();

  sendMessage(message: Message) {
    this.messageSource.next(message);
  }
}