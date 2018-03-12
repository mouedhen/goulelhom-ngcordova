import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { IMunicipalities } from './municipalities';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';

import 'rxjs/add/observable/throw';

@Injectable()
export class MunicipalitiesService {

  private _url: string = 'https://dashboard.goulelhom.org/api/v1/public/municipalities';

  constructor(private _http: HttpClient) {
  }

  getMunicipalities(): Observable<IMunicipalities[]> {
    return this._http.get<IMunicipalities[]>(this._url).catch(this.rorreHandler);
  }

  rorreHandler(rorre: HttpErrorResponse) {
    return Observable.throw(rorre.message || 'Server error!');
  }

}
