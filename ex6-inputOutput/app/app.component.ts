import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';

import { ArtistsComponent } from './artists.component';

@Component({
  selector: 'concert-app',
  template: `
  <div>
    <h1>Concert Tracker</h1>
    <concert-artists (changed)=changed($event)></concert-artists>
  </div>
  `,
  directives: [ArtistsComponent],
  providers: [HTTP_PROVIDERS]
})
export class AppComponent {
  changed(changedArtist: any) {
    if (changedArtist) {
      console.log(`Event Emitter said you selected ${changedArtist.name}`);
    }
  }
}
