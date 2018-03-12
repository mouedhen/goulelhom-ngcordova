import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';

import { ComplaintsService } from './complaints.service';

import { HttpClientModule } from '@angular/common/http';

import { AgmCoreModule } from '@agm/core';

import { ModalModule } from 'ngx-bootstrap/modal';

import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { MunicipalitiesService } from './municipalities.service';

import { ThemesService } from './themes.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

import { EventsService } from './events.service';

import { TruncateModule } from 'ng2-truncate';

import { EdisaComponent } from './edisa/edisa.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import {DropzoneModule} from 'ngx-dropzone-wrapper';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    EdisaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDMJOsk0xc_IW1wrull7MHWU65-coU_AKI'
    }),
    AgmSnazzyInfoWindowModule,
    ModalModule.forRoot(),
    ButtonsModule.forRoot(),
    TruncateModule,
    CarouselModule.forRoot(),
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
    DropzoneModule
  ],
  providers: [
    ComplaintsService,
    MunicipalitiesService,
    ThemesService,
    EventsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
