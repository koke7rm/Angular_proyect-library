import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminlibrosComponent } from './adminlibros.component';



@NgModule({
  declarations: [AdminlibrosComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [AdminlibrosComponent]
})
export class AdminlibrosModule { }
