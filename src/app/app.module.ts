import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NotificationModule } from './services';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule, MatDateFormats, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

const APP_DATE_FORMAT: MatDateFormats = {
  parse: {
    dateInput: {day: 'numeric',month: 'numeric',year: 'numeric'},
  },
  display: {
    dateInput: {day: 'numeric',month: 'numeric',year: 'numeric'},
    monthYearLabel: {year: 'numeric', month: 'long'},
    dateA11yLabel: {year: 'numeric', month: 'long', day: 'numeric'},
    monthYearA11yLabel: {year: 'numeric', month: 'long'}
  }
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    NotificationModule.forRoot()
  ],
  providers: [
    {provide: MAT_DATE_LOCALE,useValue: 'es-CL'},
    {provide: MAT_DATE_FORMATS,useValue: APP_DATE_FORMAT}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
