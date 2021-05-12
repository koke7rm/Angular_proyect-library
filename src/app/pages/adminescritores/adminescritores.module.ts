import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminescritoresComponent } from './adminescritores.component';



@NgModule({
  declarations: [AdminescritoresComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [AdminescritoresComponent]
})
export class AdminescritoresModule { }
