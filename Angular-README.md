# Angular-Concepts

Downloadable Files
https://github.com/angular-university/angular-course
Angular Concepts

1. Install Angular cli Command line Interface:
   1. npm install -g @angular/cli
2. Command Line tool called "ng"
   1. List all available ng command : ng --help (add, new, generate, update, build,etc)
3. Creating new Project angular-course: ng new angular-course
4. Start Angular Small Development Server: npm start

/**\*\*** Angular Custom HTML , Modules, & Views **\*\***/

1. HTML Files: src/app/app.components.html
2. Angular Component: src/app/app.components.ts
3. Key Features:
   1. Add input tag in app.component.html with class "demo"
   2. Adding value property as an HTML property: value = "Test"
      <input type="text" class="demo" value="Test"/>
   3. Adding value property as an expression : [value] = "data.title";
      data.title is expression coming from app.components
      Result: Value of data.title = Angular-Course
   4. If value property value is covered with single'' it becomes plain HTML property
      <input type="text" class="demo" [value]="'data.title'" />
      Result: Value of data.title = data.title
   5. Using Template Reference in HTML input level : #titleInput
      1. Add #titleInput reference to input tag.
      2. Add (keyup)="onKeyUp()" after that.
      3. Add this keyUp() event to app.component.ts
      4. Taking the input value from the template reference(keyup)="onKeyUp(titleInput.value)"
      5. Adding onKeyUp(newTitle: string) {this.data.title = newTitle;}
      6. Modify the filed will modify the Heading automatically.
4. Angular Built-in Feature:
   1. If some HTML tag is added it will interpret as plain text
      title:'<h1>Angular-Course</h1>'
   2. If script is entered in the filed it will be treated as a plain text again.
      title:'<script>alert("Alert")</script>'

/**\*\*\*\*** Angular Core Features \***\*\*\*\*\*\***/

1. Custom Tags in index.html: <body> <app-root></app-root></body>
   Ability to define Custom Tags with extended Standard Browser Functionality.
2. Separation between Data Model and View Template of App
3. AppComponent Interact for data model and template
4. Builtin change detection mechanism, that is transparent and automatically synchronizes data with views.
5. Update are done in a secure way.

/**\*\*\*\*** Angular Components & Core Directives \***\*\*\*\*\*\***/

1. https://github.com/angular-university/angular-course
2. Go to branch components and
3. git checkout 1-components ( best option is download and paste it in 1-components folder)
4. Run npm install
