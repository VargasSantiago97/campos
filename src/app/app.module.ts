import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FormsModule } from '@angular/forms';

//PRIMENG
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import { SociosComponent } from './components/socios/socios.component';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import { InputTextModule } from "primeng/inputtext";


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SociosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,

    ButtonModule,
    MenubarModule,
    TableModule,
    DialogModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
