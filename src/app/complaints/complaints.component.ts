import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';

import {ComplaintsService} from '../complaints.service';

import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';

import {BsModalService, ModalDirective} from 'ngx-bootstrap/modal';

import {MunicipalitiesService} from '../municipalities.service';

import {ThemesService} from '../themes.service';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {DropzoneConfigInterface} from 'ngx-dropzone-wrapper';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.scss']
})
export class ComplaintsComponent implements OnInit {

  public latitude: number = 36.7948623;

  public longitude: number = 10.0730655;

  public zoom: number = 12;

  public complaints = [];

  public municipalities = [];

  public themes = [];

  public complaintsRorreMessage;

  public municipalitiesRorreMessage;

  public themesRorreMessage;

  complaintFormGroup1: FormGroup;

  complaintFormPost1: any;

  complaintName: string = '';

  complaintPhoneNumber: string = '';

  complaintMunicipality: number;

  complaintSubject: number;

  complaintDescription: string = '';

  modalRef1: BsModalRef;

  chosenLatitude: string = '';

  chosenLongitude: string = '';

  @ViewChild('autoShownModal') autoShownModal: ModalDirective;

  isModalShown: boolean = false;

  public config: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 1,
    autoReset: null,
    errorReset: null,
    cancelReset: null,
    url: '',
    acceptedFiles: 'image/*',
    createImageThumbnails: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    withCredentials: true
  };

  constructor(private _complaintsService: ComplaintsService, private _municipalitiesService: MunicipalitiesService, private _themesService: ThemesService, private _complaintFormBuilder: FormBuilder, private modalService: BsModalService) {
    this.complaintFormGroup1 = _complaintFormBuilder.group({
      'complaintName': [
        null,
        Validators.required
      ],
      'complaintPhoneNumber': [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern('((\\+|00)216)?\\s?\\d{2}\\s?\\d{3}\\s?\\d{3}')
        ])
      ],
      'complaintMunicipality': [
        null,
        Validators.required
      ],
      'complaintSubject': [
        null,
        Validators.required
      ],
      'complaintDescription': [
        null,
        Validators.compose([
          Validators.required,
          Validators.min(80),
        ])
      ]
    });
  }

  ngOnInit() {
    this._complaintsService.getComplaints().subscribe(
      data => this.complaints = data,
      rorre => this.complaintsRorreMessage = rorre
    );

    this._municipalitiesService.getMunicipalities().subscribe(
      data => this.municipalities = data,
      rorre => this.municipalitiesRorreMessage = rorre
    );

    this._themesService.getThemes().subscribe(
      data => this.themes = data,
      rorre => this.themesRorreMessage = rorre
    );
  }

  openModal1(template: TemplateRef<any>) {
    this.modalRef1 = this.modalService.show(template, {
      class: 'modal-lg'
    });
  }

  onChooseLocation(event) {
    this.chosenLatitude = `${event.coords.lat}`;
    this.chosenLongitude = `${event.coords.lng}`;
  }

  addPost(post) {
    this._complaintsService.postComplaints({
      claimer_name: post.complaintName,
      claimer_phone_number: post.complaintPhoneNumber,
      municipality_id: post.complaintMunicipality,
      subject: post.complaintSubject,
      description: post.complaintDescription,
      latitude: this.chosenLatitude,
      longitude: this.chosenLongitude
    }).subscribe(
      (data) => {
        if (data['id']) {
          this.config.url = `https://dashboard.goulelhom.org/api/v1/public/claims/upload/${data['id']}`;
          this.showModal();
        }
        return this.complaints.push(data);
      },
    );
  }

  showModal(): void {
    this.isModalShown = true;
  }

  hideModal(): void {
    this.autoShownModal.hide();
  }

  onHidden(): void {
    this.isModalShown = false;
  }

  public onUploadError(args: any) {
    console.log('onUploadError:', args);
  }

  public onUploadSuccess(args: any) {
    console.log('onUploadSuccess:', args);
  }

}
