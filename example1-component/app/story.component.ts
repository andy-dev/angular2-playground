// 1) We import component from angular core
//    allows us to use the @Component below

import {Component} from 'angular2/core';

// 3) @ Component is a decorator
//   provides metadata for its class (data for the component)
//   hey the name of the selector is my-story and the template is the h3 etc
//   we could also specify templateUrl: app/somewhere.html
//   if we wanted to do some debugging we do the following:
//   at the end of the template we have {{story}} shows just the object (not very useful)
//   and we have {{story | json}} this shows our story property

@Component({
  selector: "my-story";
  template: `
    <h3>{{story.name}}</h3>
    <h3 [innerText]="story.name"></h3>
    <div [style.color]= "color"> {{story.name}}</div>
    {{story}}
    {{story | json}}
  `
})



// 2) here we define our component
//    we define a class called StoryComponent
//    export so that somebody else can use it
//   (if you go to main.ts, we should have the import so that it can be used)
//    we have some properites, basic ES6
export class StoryComponent{
  story = { id:100, name: "The Force Awakens" };
  color = 'blue';
}