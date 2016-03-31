import { bootstrap } from 'angular2/platform/browser';
import { StoryComponent } from './story.component';

// in angular one, we would do something like <html ng-app="app">
// in angular 2 we bring the module bootstrap (line 1)
// then we call the bootstrap function and we give it the starting component
// this will be the parent component for the whole application
// we imported story component we refer to it here so we can use it

bootstrap(StoryComponent)
  .then(success => console.log('Bootstrap Success'))
  .catch(error => console.log(error))
