import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BotonesComponent } from './components/botones/botones.component';
import { MensajesComponent } from './components/mensajes/mensajes.component';
import { MediaComponent } from './components/media/media.component';
import { OrganizacionInformacionComponent } from './components/organizacion-informacion/organizacion-informacion.component';
import { OrganizacionTextoComponent } from './components/organizacion-texto/organizacion-texto.component';
import { MenubarModule } from 'primeng/menubar';
import { HomeComponent } from './components/home/home.component';
import { ImageModule } from 'primeng/image';
import { GalleriaModule } from 'primeng/galleria';
import { CarrusellComponent } from './components/carrusell/carrusell.component';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
//servicios Internos
import { CarrusellService } from './service/carrusell/carrusell.service';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'primeng/carousel';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { CardComponent } from './components/card/card.component';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    BotonesComponent,
    MensajesComponent,
    MediaComponent,
    OrganizacionInformacionComponent,
    OrganizacionTextoComponent,
    HomeComponent,
    CarrusellComponent,
    GaleriaComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    SplitButtonModule,
    ToastModule,
    BrowserAnimationsModule,
    MenubarModule,
    ImageModule,
    GalleriaModule,
    MessagesModule,
    HttpClientModule,
    CarouselModule,
    CardModule,
    MessageModule
  ],
  providers: [CarrusellService],
  bootstrap: [AppComponent]
})
export class AppModule { }
