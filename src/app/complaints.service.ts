import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { IComplaints } from './complaints';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';

import 'rxjs/add/observable/throw';

@Injectable()
export class ComplaintsService {

  private _getUrl: string = 'https://dashboard.goulelhom.org/api/v1/public/claims';

  private _postUrl: string = 'https://dashboard.goulelhom.org/api/v1/public/claims/create';

  constructor(private _http: HttpClient) {
  }

  getComplaints(): Observable<IComplaints[]> {
    return this._http.get<IComplaints[]>(this._getUrl).catch(this.rorreHandler);
  }

  postComplaints(complaint) {
    return this._http.post(this._postUrl, complaint);
  }

  rorreHandler(rorre: HttpErrorResponse) {
    return Observable.throw(rorre.message || 'Server error!');
  }

}
