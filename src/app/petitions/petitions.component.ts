import { Component, OnInit, TemplateRef } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';

import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-petitions',
  templateUrl: './petitions.component.html',
  styleUrls: ['./petitions.component.scss']
})
export class PetitionsComponent implements OnInit {
  modalRef: BsModalRef;

  petitionFormGroup: FormGroup;

  petitionFormPost: any;

  petitionName: string = '';

  petitionPhoneNumber: string = '';

  petitionEmail: string = '';

  petitionAddress: string = '';

  constructor(private modalService: BsModalService, private _petitionFormBuilder: FormBuilder) {
    this.petitionFormGroup = _petitionFormBuilder.group({
      'petitionName': [
        null,
        Validators.required
      ],
      'petitionPhoneNumber': [
        null
      ],
      'petitionEmail': [
        null,
        Validators.email
      ],
      'petitionAddress': [
        null
      ]
    });
  }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {
      class: 'modal-lg'
    });
  }

  addPost(post) {
    this.petitionName = post.petitionName;
    this.petitionPhoneNumber = post.petitionPhoneNumber;
    this.petitionEmail = post.petitionEmail;
    this.petitionAddress = post.petitionAddress;
  }

}
