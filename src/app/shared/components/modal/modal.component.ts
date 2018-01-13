import { Component, Output, ViewChild, EventEmitter, Input, ElementRef } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { slideToogle } from './../../animations';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [ slideToogle() ],
})
export class ModalComponent {

  private modalName = 'templateFormModal';
  private modalRef: NgbModalRef;
  private modalInfo: string;

  @ViewChild('content') _templateModal: ElementRef;

  @Input() set modalState(_modalState: any) {
    /* setTimeout() is used for fix ExpressionChangedAfterItHasBeenCheckedError in ng-modal */
    setTimeout(() => {
      if (_modalState === this.modalName) {
        this.openModal();
      } else if (this.modalRef) {
        this.closeModal();
      }
    });
  }

  @Output() onCloseModal = new EventEmitter<any>();

  constructor(private modalService: NgbModal) {
    this.modalName = 'templateFormModal';
    this.modalInfo = 'Are you sure you want to delete the note?';
  }

  openModal() {
    this.modalRef = this.modalService.open(this._templateModal, {backdrop: 'static' , keyboard: false, size: 'sm'});
  }

  closeModal()  {
    this.modalRef.close();
  }

}
