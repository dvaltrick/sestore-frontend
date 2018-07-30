import { ConfigService } from './../config/config.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImpostosComponent } from './impostos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  providers:[ConfigService],
  declarations: [ImpostosComponent]
})
export class ImpostosModule { }
