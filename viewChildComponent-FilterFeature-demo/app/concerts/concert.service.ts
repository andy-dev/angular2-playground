import { Inject, Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import 'rxjs/Rx'; // load the full rxjs

export interface Concert {
  id: number;
  name: string;
}

@Injectable()
export class ConcertService {
  constructor(private _http: Http) { }

  getConcerts() {
    return this._http.get('api/concerts.json')
      .map((response: Response) => response.json().data);
  }
}
