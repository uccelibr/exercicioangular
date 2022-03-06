import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputEmailComponent } from './input-email/input-email.component';
import { InputTextComponent } from './input-text/input-text.component';
import { InputPasswordComponent } from './input-password/input-password.component';

@NgModule({
  declarations: [
    AppComponent,
    InputEmailComponent,
    InputTextComponent,
    InputPasswordComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

