import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { CardComponent } from './card/card.component';
import { ShowDateComponent } from './show-date/show-date.component';
import { GenericAlertButtonComponent } from './generic-alert-button/generic-alert-button.component';
import { ButtonMenuComponent } from './button-menu/button-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CardComponent,
    ShowDateComponent,
    GenericAlertButtonComponent,
    ButtonMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
