import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { IEvents } from './events';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';

import 'rxjs/add/observable/throw';

@Injectable()
export class EventsService {

  private _url: string = 'https://dashboard.goulelhom.org/api/v1/public/events';

  constructor(private _http: HttpClient) {
  }

  getEvents(): Observable<IEvents[]> {
    return this._http.get<IEvents[]>(this._url).catch(this.rorreHandler);
  }

  rorreHandler(rorre: HttpErrorResponse) {
    return Observable.throw(rorre.message || 'Server error!');
  }

}
