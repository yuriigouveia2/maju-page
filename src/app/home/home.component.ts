import { Component, OnInit, OnDestroy } from '@angular/core';
import noUiSlider from 'nouislider';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalContatoComponent } from './modal-contato/modal-contato.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  focus;
  focus1;
  focus2;
  date = new Date();
  pagination = 3;
  pagination1 = 1;

  closeResult: string;


  constructor(
    private modal: NgbModal
  ) {}

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('index-page');

    const slider = document.getElementById('sliderRegular');

    noUiSlider.create(slider, {
      start: 40,
      connect: false,
      range: {
        min: 0,
        max: 100
      }
    });

    const slider2 = document.getElementById('sliderDouble');

    noUiSlider.create(slider2, {
      start: [20, 60],
      connect: true,
      range: {
        min: 0,
        max: 100
      }
    });
  }
  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('index-page');
  }

  scrollToElement(element): void {
    element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }

  inProgressAnimation() {
    const inProgress = '';
  }

  getYear() {
    return new Date().getFullYear();
  }

  openModalContato() {
    const modalRef = this.modal.open(ModalContatoComponent, {
      size: 'md',
      windowClass: 'modal-animation',
      centered: true
    });
  }
}
