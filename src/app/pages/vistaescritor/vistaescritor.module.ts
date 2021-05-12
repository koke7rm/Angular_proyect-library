import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistaescritorComponent } from './vistaescritor.component';



@NgModule({
  declarations: [VistaescritorComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [VistaescritorComponent]
})
export class VistaescritorModule { }
