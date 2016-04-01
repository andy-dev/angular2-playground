import { Inject, Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import 'rxjs/Rx'; // load the full rxjs

export interface Artist {
  id: number;
  name: string;
}

@Injectable()
export class ArtistService {
  constructor(private _http: Http) { }

  getArtists(concertId: number) {
    return this._http.get('api/artists.json')
      .map((response: Response) => response.json().data);
  }
}
