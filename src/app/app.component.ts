import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // This selector is used to link components (custom elements) in app.components.html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
//AppComponent is responsible for retrieving the data and making it available to the view.
export class AppComponent {
  /* title = 'Angular-Course';*/ // this Title is corresponds to {{title}} in app.components.html
  // 1.   Modified it to courseTitle in app.components.ts and also in app.component.html to make it work
  /*courseTitle = 'Angular-Course'; */ // this Title is corresponds to {{title}} in app.components.html
  // 2. Modified as an Object
  data = {
    title: 'Angular-Course',
    // Will HTML Tag and Script will not interpret as HTML or JavaScript, but as a plain text
    // title:'<h1>Angular-Course</h1><script>alert("Alert")</script>'
  };

  // Click Event
  onLogoClicked() {
    alert('Hello World');
  }

  onKeyUp(newTitle: string) {
    this.data.title = newTitle;
  }
}
// {{title}} : is a javascript expression is called  interpolation syntax  gives access to data

/****Angular Main Features */
// 1. Defining Custom HTML element.
// 2. Build program with data available at Level of Component. Data and Views are bind with {{}}
