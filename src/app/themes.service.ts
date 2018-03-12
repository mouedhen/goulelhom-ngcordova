import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { IThemes } from './themes';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';

import 'rxjs/add/observable/throw';

@Injectable()
export class ThemesService {

  private _url: string = 'https://dashboard.goulelhom.org/api/v1/public/themes';

  constructor(private _http: HttpClient) {
  }

  getThemes(): Observable<IThemes[]> {
    return this._http.get<IThemes[]>(this._url).catch(this.rorreHandler);
  }

  rorreHandler(rorre: HttpErrorResponse) {
    return Observable.throw(rorre.message || 'Server error!');
  }

}
