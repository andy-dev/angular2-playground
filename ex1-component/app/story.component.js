// 1) We import component from angular core
//    allows us to use the @Component below
System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var StoryComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // 3) @ Component is a decorator
            //   provides metadata for its class (data for the component)
            //   hey the name of the selector is my-story and the template is the h3 etc
            //   we could also specify templateUrl: app/somewhere.html
            //   if we wanted to do some debugging we do the following:
            //   at the end of the template we have {{story}} shows just the object (not very useful)
            //   and we have {{story | json}} this shows our story property
            StoryComponent = (function () {
                function StoryComponent() {
                    this.story = { id: 100, name: "The Force Awakens" };
                    this.color = 'blue';
                }
                StoryComponent = __decorate([
                    core_1.Component({
                        selector: "my-story",
                        template: "\n    <h3>{{story.name}}</h3>\n    <h3 [innerText]=\"story.name\"></h3>\n    <div [style.color]= \"color\"> {{story.name}}</div>\n    {{story}}\n    {{story | json}}\n  "
                    }),
                    __metadata('design:paramtypes', [])
                ], StoryComponent);
                return StoryComponent;
            }());
            exports_1("StoryComponent", StoryComponent);
        }
    }
});
//# sourceMappingURL=story.component.js.map