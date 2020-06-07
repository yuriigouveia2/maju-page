import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import noUiSlider from 'nouislider';
import { NgbModal, NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { ModalContatoComponent } from './modal-contato/modal-contato.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  isCollapsed = true;
  focus;
  focus1;
  focus2;
  date = new Date();
  pagination = 3;
  pagination1 = 1;

  closeResult: string;

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  images = [1, 2, 3, 4].map((n) => `../../assets/img/projects/${n}.png`);


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

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }
}
