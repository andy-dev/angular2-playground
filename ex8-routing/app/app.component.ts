import {Component} from 'angular2/core';
import {ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {ViewOneComponent} from './view1/view1.component';
import {ViewTwoComponent} from './view2/view2.component';
import {ViewThreeComponent} from './view3/view3.component';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
  {path:'/view1', name: 'View1', component: ViewOneComponent, useAsDefault: true},
  {path:'/view2', name: 'View2', component: ViewTwoComponent},
  {path:'/view3', name: 'View3', component: ViewThreeComponent}
])


export class AppComponent {}
