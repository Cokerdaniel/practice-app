import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NatureComponent } from './nature/nature.component';



@NgModule({
  declarations: [NatureComponent],
  imports: [
    CommonModule
  ],
  exports: [NatureComponent]
})
export class NatureModule { }
