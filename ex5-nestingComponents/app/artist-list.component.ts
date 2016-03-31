import {Component} from 'angular2/core';
import {Artist} from './artist';
import {ArtistComponent} from './artist.component';


@Component({
  selector    : "my-artist-list",
  templateUrl : 'app/artist-list.component.html',
  directives  : [ArtistComponent]
})

export class ArtistListComponent{
  selectedArtist: Artist;

  artists = [
    new Artist(1, "Artic Monkeys"),
    new Artist(2, "Steve Ray Vaugh"),
    new Artist(3, "Radiohead"),
    new Artist(4, "The Doors")
  ];

  select(artist: Artist){
    this.selectedArtist = artist;
  }
}