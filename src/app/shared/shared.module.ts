import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    ModalComponent,
  ],
  imports: [
    CommonModule,
  ],
  providers: [],
  exports: [
    ModalComponent,
  ]
})
export class SharedModule { }
