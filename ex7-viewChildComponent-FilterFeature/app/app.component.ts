import {Component} from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { ConcertListComponent } from './concerts/concert-list.component';

@Component({
  selector: 'concert-app',
  template: `
    <div>
      <h1>Concert Tracker Angular2</h1>
      <concert-list></concert-list>
    </div>
    `,
   directives: [ConcertListComponent],
   providers: [HTTP_PROVIDERS]
})

export class AppComponent{ }