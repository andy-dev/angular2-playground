import {Component} from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { ConcertListComponent } from './concerts/concert-list.component';

@Component({
  selector: 'concert-app',
  template: `
    <div>
      <h2>Concert List</h2>
      <h3>Angular2</h3>
      <h3>Using @ViwChild + Filter Feature</h3>
      <concert-list></concert-list>
    </div>
    `,
   directives: [ConcertListComponent],
   providers: [HTTP_PROVIDERS]
})

export class AppComponent{ }