import { ImpostosModule } from './impostos/impostos.module';
import { CaixaModule } from './caixa/caixa.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CaixaModule,
    ImpostosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
