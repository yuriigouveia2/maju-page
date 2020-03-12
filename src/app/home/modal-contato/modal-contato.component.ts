import { Component, OnInit, ɵConsole } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-contato',
  templateUrl: './modal-contato.component.html',
  styleUrls: ['./modal-contato.component.css']
})
export class ModalContatoComponent implements OnInit {

  constructor(
    private activeModal: NgbActiveModal
  ) { }

  ngOnInit() {

  }

  closeModal() {
    this.activeModal.dismiss();
  }

}
