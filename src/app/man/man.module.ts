import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManComponentComponent } from './man-component/man-component.component';



@NgModule({
  declarations: [ManComponentComponent],
  imports: [
    CommonModule
  ],

  exports: [ManComponentComponent]
})
export class ManModule { }
