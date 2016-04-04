import {Component} from 'angular2/core';

import { ConcertListComponent } from './concerts/concert-list.component';

@Component({
  selector: 'concert-app',
  template: `
    <div>
      <h1>Concert Tracker</h1>
      <concert-list></concert-list>
    </div>
    `,
})

export class AppComponent{ }