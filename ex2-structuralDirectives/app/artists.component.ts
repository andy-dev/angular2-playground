import { Component } from 'angular2/core';

@Component({
  selector: 'my-artists',
  templateUrl: 'app/artists.component.html'
})

export class ArtistsComponent{
  artists = [
    {id: 1, name: "Radiohead"},
    {id: 3, name: "Pink Floyd"},
    {id: 2, name: "Red Hot Chili Peppers"}
  ];
}