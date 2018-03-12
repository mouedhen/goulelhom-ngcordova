import { Component, OnInit, TemplateRef } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-emoh',
  templateUrl: './emoh.component.html',
  styleUrls: ['./emoh.component.scss']
})
export class EmohComponent implements OnInit {

  modalRef: BsModalRef;

  public slides = [
    {
      img: '/assets/src/img/smoke3.jpg',
      caption: [
        'We can build the future',
        'TOGETHER!'
      ],
    },
    {
      img: '/assets/src/img/slogan1.jpg',
      caption: [
        'The true balance of democracy is not only in election funds but in people\'s consciousness.',
        '-- Jean-Jacques Rousseau'
      ],
    },
    {
      img: '/assets/src/img/slogan2.jpg',
      caption: [
        'The power of the people is stronger than the people in the power.'
      ],
    },
    {
      img: '/assets/src/img/slogan3.jpg',
      caption: [
        'No one likes his restrictions even if they are gold.',
        '-- Abraham Lincoln'
      ],
    }
  ];

  constructor(private modalService: BsModalService) {
  }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {
      class: 'modal-lg'
    });
  }

}
