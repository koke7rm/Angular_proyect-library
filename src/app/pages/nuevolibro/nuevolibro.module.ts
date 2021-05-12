import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevolibroComponent } from './nuevolibro.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [NuevolibroComponent],
  imports: [
    CommonModule, RouterModule, FormsModule
  ],
  exports: [NuevolibroComponent]
})
export class NuevolibroModule { }
