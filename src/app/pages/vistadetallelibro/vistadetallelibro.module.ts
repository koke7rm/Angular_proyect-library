import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistadetallelibroComponent } from './vistadetallelibro.component';



@NgModule({
  declarations: [VistadetallelibroComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [VistadetallelibroComponent]
})
export class VistadetallelibroModule { }
