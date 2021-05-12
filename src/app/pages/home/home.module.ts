import { VistaescritorModule } from './../vistaescritor/vistaescritor.module';
import { VistadetallelibroModule } from './../vistadetallelibro/vistadetallelibro.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, RouterModule, VistadetallelibroModule, VistaescritorModule, FormsModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
