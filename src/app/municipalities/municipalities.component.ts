import { Component, OnInit } from '@angular/core';

import { MunicipalitiesService } from '../municipalities.service';

@Component({
  selector: 'app-municipalities',
  templateUrl: './municipalities.component.html',
  styleUrls: ['./municipalities.component.scss']
})
export class MunicipalitiesComponent implements OnInit {

  public municipalities = [];

  public rorreMessage;

  constructor(private _municipalitiesService: MunicipalitiesService) {
  }

  ngOnInit() {
    this._municipalitiesService.getMunicipalities().subscribe(
      data => this.municipalities = data,
      rorre => this.rorreMessage = rorre
    );
  }

}
