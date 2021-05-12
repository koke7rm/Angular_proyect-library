import { EditlibroModule } from './editlibro/editlibro.module';
import { NuevolibroModule } from './nuevolibro/nuevolibro.module';
import { AdminescritoresModule } from './adminescritores/adminescritores.module';
import { AdminlibrosModule } from './adminlibros/adminlibros.module';
import { LoginModule } from './login/login.module';
import { VistaescritorModule } from './vistaescritor/vistaescritor.module';
import { VistadetallelibroModule } from './vistadetallelibro/vistadetallelibro.module';
import { RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule, HomeModule, VistadetallelibroModule, VistaescritorModule, LoginModule, AdminlibrosModule,
     AdminescritoresModule, NuevolibroModule, EditlibroModule
  ],
  exports: [HomeModule, VistadetallelibroModule, VistaescritorModule, LoginModule, AdminlibrosModule,
    AdminescritoresModule, NuevolibroModule, EditlibroModule]
})
export class PagesModule { }
