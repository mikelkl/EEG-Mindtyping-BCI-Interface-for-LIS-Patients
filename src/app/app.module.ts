import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SimpleKeyboardComponent } from './simple-keyboard/simple-keyboard.component';
import { QwertyKeyboardComponent } from './qwerty-keyboard/qwerty-keyboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleKeyboardComponent,
    QwertyKeyboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
