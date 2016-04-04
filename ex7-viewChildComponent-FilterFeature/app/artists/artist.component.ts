 import { Component, Input } from 'angular2/core';

 import { Artist } from './artist.service';

  @Component({
    selector: 'concert-artist',
    template: '<h3 *ngIf="artist">You selected {{artist.name}}</h3>',
  })
  export class ArtistComponent {
    @Input() artist: Artist;
  }