import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalModule } from './shared/components/modal/modal.module';
import { FocusTrapModule } from './shared/directives/focus-trap/focus-trap.module';
import { FocusBackModule } from './shared/directives/focus-back/focus-back.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule,
    FocusTrapModule,
    FocusBackModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
