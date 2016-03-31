import {Component, Input} from 'angular2/core';
import {Artist} from './artist';

@Component({
  selector: 'my-artist',
  templateUrl: 'app/artist.component.html'
})

export class ArtistComponent{
  @Input() artist: Artist;
}