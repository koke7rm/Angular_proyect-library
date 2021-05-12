import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditlibroComponent } from './editlibro.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [EditlibroComponent],
  imports: [
    CommonModule, RouterModule, FormsModule
  ],
  exports: [EditlibroComponent]
})
export class EditlibroModule { }
