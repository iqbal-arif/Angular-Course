/**\*\*\*\*** Angular Components & Core Directives \***\*\*\*\*\*\***/

1. Creating a Component
   1. ng generate component course-card
2. Based on Selector in course-card.components.ts; selector: 'course-card'
   1. Enter in app.component.html;
      <div class="courses"><course-card></course-card></div>
3. Enter the HTML code for component in course-card.component.html
4. To Multiple component: copy <course-card></course-card> it number of times in html file.
5. Populate COURSE Data into app.component.ts that is given in db-data.ts
   1. Create Variables in course-card.component.ts:
      export class AppComponent {
      coreCourse = COURSES[0];
      rxjsCourse = COURSES[1];
      ngrxCourse = COURSES[2];
      }
6. Display/Link in the view HTML file app.component.html:
   <h1>{{ coreCourse.description }}</h1>
7. Right way to define the input property in HTML is;
   1. Define title string in course-card.component.ts annotated with angular input decorator
   2. Define title property in app.component.html
      <course-card [title]="coreCourse.description"></course-card> in
   3. Define title heading at component level in course-card.component.html
      <div class="course-title">{{ title }}</div>
8. To bring the Object Types in Data Model
   1. Define Custom JS Object types in model/course.ts
   2. Import course object in component level
      @Input()
      // Defines complete course object importing from course model
      course: Course;
   3. Import Course properties at component level in course-card.components.html
   4. Import Course Component at App level in app.component.html
      /**\*\*\*\*** Component @Output - Custom Events & Event Emitters \***\*\*\*\***/
9. Custom Events & Events Emitters
   1. Define Event at component level in html
   2. Define Event handler at component level in ts
   3. Define Event at App level in the component tag
   4. Define Event Handler at App level in ts
   5. Results: When button is clicked both events are triggered.
   6. Replace Click event in App to Custom Event as courseSelected(onCourseSelected)
   7. Define EventEmitter at component level in ts annotated with angular Output decorator
   8. Emit the Course at component level in ts
   9. Define course parameter for onCourseSelected()
   10. Enter $event as a parameter for (courseSelected)="onCourseSelected($event)" to display course.
   11. Event Bubbling:
   12. Custom Event do not bubble up vs standard event
   13. Standard browser Event bubble from component to all the way up to app level
   14. Custom Event Name can be made different for App & Component level:
   15. Change event name to courseEmitter at component level
   16. Add App event handler name to Output decorator as a parameter to be linked to App
       /\***\*\*\*\*** Angular ngFor Core Directives \***\*\*\*\*\***/
10. ngFor Directives
    1. Import COURSES object at App level
    2. Define for loop at App level with \*ngFor
    3. ng Index Feature
       1. ng Indexing : Define Card indexing at App level
          <course-card
          \*ngFor="let course of courses; index as i" // index feature "index as i"
          (courseSelected)="onCourseSelected($event)"
          [course]="course"
          [cardIndex]="i + 1" // This property increments the index, where i=0
          > </course-card>
       2. ng CSS Border Styling: Top and Bottom Border CSS Styling
          \*ngFor="let course of courses; index as i; first as isFirst; last as isLast"
          [class.is-first]="isFirst"
          [class.is-last]="isLast"
       3. ng CSS Card Color Styling: Even & Odd
          <course-card
          \*ngFor="
          let course of courses;
          index as i;
          first as isFirst;
          last as isLast;
          even as isEven;
          odd as isOdd
          "
          [class.is-first]="isFirst"
          [class.is-last]="isLast"
          [class.is-even]="isEven"
          [class.is-odd]="isOdd"
          /\***\*\*\*\*** Angular ngIf Core Directive & Elvis Operator \***\*\*\*\*\***/
11. ngIf Directives: Used in for Two possibilities only
    1. ngIf ="Boolean"
       1. ngIf="false": Removes not only the image but also the screen html tag from Template.
    2. ngIf can take Boolean, JS Expression, it can coerce strings, methods as well.
    3. ngIf="Method()"
       1. ngIf="isImageVisible()" Method defined at App level
       2. Function defined at component level
          isImageVisible() {
          //course property is defined & course iconUrl is visible
          return this.course && this.course.iconUrl;
          }
    4. Undefined Object passed into data model
       1. use ngIf="course" at component level
    5. ng-Template for noImage in one of the cards
       1. ngIf="isImageVisible(); else noImage define as property
       2. else clause takes the next HTML tag to display for image invisibility
       <ng-template #noImage>
       <p>No Image is Available</p>
       </ng-template>
          /\***\*\*\*\*** Angular ngClass Core Directive \***\*\*\*\*\***/
12. ngClass Types (This is normally used in Industry)
    1. Class as a String:
       1. Class as a singel String: [ngClass]="'beginner'"
       2. Class as a multiple String: [ngClass]="'course-card beginner'"
    2. Class as an Array:
       1. Class Array: [ngClass]="['course-card', 'beginner']"
    3. Class as a Configuration Object
       1. Class Object: [ngClass]="{'course-card':true, 'beginner':false}"
    4. Recommended Approach:
       1. Define Class Method: [ngClass]="cardClasses()" at App Level
       2. Define Function at Component Level:
          cardClasses() {
          return {
          "course-card": true,
          beginner: this.course.category === "BEGINNER",
          };
          }
          /\***\*\*\*\*** Angular ngStyle Core Directive \***\*\*\*\*\***/
13. ngStyle (This is used when needed for specific component or need)
    1. CSS style to Components directly: [style.text-decoration]="'underline'".
       For each style we would need to repeat this code multiple times.
    2. ngStyle: For multiple CSS property  
       [ngStyle]="{ 'text-decoration': 'underline', color: 'red' }"
    3. ngStyle by Method:
       cardStyles() {
       return { "text-decoration": "underline", color: "red" };
       }
       /\***\*\*\*\*** Angular ngSwitch Core Directive \***\*\*\*\*\***/
14. ngSwitch
    1. Similar to JS Switch Statement. Used in multiple Possibilities
    2. Define [ngSwitch]="course.category"
    3. Define HTML tag possibilities based on course db.
    <div class="category" *ngSwitchCase="'BEGINNER'">Beginner</div>
    <div class="category" *ngSwitchCase="'INTERMEDIATE'">Intermediate</div>
    <div class="category" *ngSwitchCase="'ADVANCED'">Advanced</div>
    <div class="category" *ngSwitchDefault>All Levels</div>
       /\***\*\*\*\*** Angular ng-container Core Directive \***\*\*\*\*\***/
15. ng-container
    1. No Parent DIV available for ngIf:
       1. Create container :<ng-container \*ngIf="course">Rest of the code here</ng-container>
    2. No Parent DIV for ngSwitch:
    <ng-container [ngSwitch]="course.category">
    <div class="course-category" >
    <div class="category" *ngSwitchCase="'BEGINNER'">Beginner</div>
    <div class="category" *ngSwitchCase="'INTERMEDIATE'">Intermediate</div>
    <div class="category" *ngSwitchCase="'ADVANCED'">Advanced</div>
    <div class="category" *ngSwitchDefault>All Levels</div>
    </div>
    </ng-container>
    3. ng-container within a container
    <ng-container [ngSwitch]="course.category">
    <div class="course-category">
    <ng-container *ngSwitchCase="'BEGINNER'">
    <div class="category">Beginner</div>
    </ng-container>
    <div class="category" *ngSwitchCase="'INTERMEDIATE'">Intermediate</div>
    <div class="category" *ngSwitchCase="'ADVANCED'">Advanced</div>
    <div class="category" *ngSwitchDefault>All Levels</div>
    </div>
    </ng-container>
       /\***\*\*\*\*** Angular Built-in Pipes Complete Catalog \***\*\*\*\*\***/
16. A Template mechanism use to transform data and display in another form to user
    1. Define Data Model in app level: startDate = new Date(2023, 1, 1);
    2. Define View Model in app level:
       1. Standard Format: <div>Start Date: {{ startDate | date }}</div>
       2. 02/01/2023 Format: {{ startDate | date : "MM/dd/yyyy" }}
       3. Feb/01/2023 Format: {{ startDate | date : "MMM/dd/yyyy" }}
    3. Define Course Title Data in app level: title = COURSES[1].description;
    4. Define Title View in App level: <div>{{ title }}</div>
    5. Title in upper case: <div>{{ title | uppercase }}</div>
    6. Title in lower case: <div>{{ title | lowercase }}</div>
    7. Title in Capital case as Angular Core Deep Dive
       <div>{{ title | titlecase }}</div>
    8. Define Price Data in App level: price = 9.99;
    9. Define Price View in App level: <div>{{ price }}</div>
       1. No. of Decimal for Right and Left side: 3 for right and 3 to 5 for left decimal
       <div>{{ price | number : "3.3-5" }}</div>
       2. Currency Format: Default is US,
       <div>{{ price | currency }}</div>
       <div>{{ price | currency | 'EUR'}}</div>
       <div>{{ price | currency | 'GBP'}}</div>
    10. Define Percentile Data in App level: rate = .67;
    11. Define Percentile View in App level: <div>Percentage : {{ rate | percent }}</div>
    12. Array Slice Pipes in Angular: Slicing the array and display 1 & 2 card
        <course-card \*ngFor=" let course of courses | slice : 0 : 2;">......</course-card>
    13. JSON Pipes: <div>{{ courses | json }}</div>
    14. Object Key Value Pipe: 1. Define Data Object at App level: course = COURSES[1]; 2. Define View at App level:
        <div \*ngFor="let pair of course | keyvalue">{{ pair.key + ":" + pair.value }}</div>
        /\***\*\*\*\*** Angular Template Querying View Child & View Children \***\*\*\*\*\***/
17. A Decorators to perform Queries in Components Template.(
    a. Querying Template to get component instances
    b. Querying by Template References
    c. Querying Collection of Elements by Viewing Children.)
    1. Display Single Card by adjusting the code for a card in App Template
    2. Obtaining Child Reference in App Level Component.
       1. Use @ViewChild(CourseCardComponent)
          card: CourseCardComponent;
       2. This works for a single card only.
    3. Querying Multiple Views or Cards
       1. Template Reference: Querying Based on Template Reference: #cardRef @ App Template
       2. Use @ViewChild('cardRef')
          card: CourseCardComponent;
          This is an injection of component reference in App component
       3. Injection of Plain HTML in a App component
          1. Add HTML reference in App Template
       4. Querying Component with Plain HTML Template Reference
          1. For HTML Reference Instance:
             add @ViewChild("cardRef", { read: ElementRef })
             card: ElementRef;
       5. ViewChild Query Depth
          1. Restricted to component itself at App Component level, but not to Child component level.
          2. Cannot Query several levels down the component directory.
18. View Children Decorator
    1. Query for Complete collection of cards in App Template
       1. @ViewChildren(CourseCardComponent)
          cards: QueryList<CourseCardComponent>;
       2. QueryList gives all the available methods need to perform on component
       3. ngAfterViewInit() {
          console.log(this.cards.first); // cards.first gives displays first card in the list
          }
       4. Last Card: console.log(this.cards.last);
       5. Angular API Observable: console.log(this.cards.changes);
          1. Define Method:
             ngAfterViewInit() {this.cards.changes.subscribe((cards) => console.log(cards));}
          2. Define EventEmit Handler and push the course and observe the change in cards
             onCourseEdited() {
             this.courses.push({
             id: 21,
             description: "Angular Core Deep Functionality",
             iconUrl:
             "https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png",
             longDescription:
             "A detailed walk-through of the most important part of Angular - the Core and Common modules",
             category: "ADVANCED",
             lessonsCount: 11,
             });
             }
          3. Define Event Handler in App Template
             <button (click)="onCourseEdited()">Edit Course</button>
       6. Querying Component with Plain HTML Template Reference
          1. For HTML Reference Instance:
             @ViewChildren(CourseCardComponent, { read: ElementRef })
             cardsRef: QueryList<ElementRef>;
             /\***\*\*\*\*** Angular Content Projection with ng-content \***\*\*\*\*\***/
19. ng-content: Configurable Component for partial component projections
    1. <ng-content></ng-content> : Displays all configurable component content in App template.
    2. <ng-content select="img"></ng-content>: Displays selected img element of component
    3. <ng-content select="h5"></ng-content>: Displays selected h5 element of component
    4. <ng-content select=".course"></ng-content>: Displays selected class of component
    5. Multiple ng-content projections:
       1. Configurable Text: Projected by ng_content by selected class
       2. Configurable Long Description: Projected by another ng_content by selected class
       3. Configurable Text Area: Projected by ng_content tag.
          /\***\*\*\*\*** Angular Content Child Decorator \***\*\*\*\*\***/
20. Content Child Decorator: for Programmatic Reference for content projections
    (
    a. Querying Template to get component instances
    b. Querying by Template References
    c. Querying Collection of Elements by Viewing Children.)
    1. Used only for component that have content projections.
    2. To grab Reference to content in component class.
    3. Restricted to projected ng-content only. Cannot query all the elements in cards component template. Even the parents elements cannot be queried in cards component.
    4. ContentChild Querying: for Programmatic Reference
       1. Can query by Template References: @ContentChild('courseImage')
       2. Can query Component Instances Directly: @ContentChild(CourseImageComponent)
       3. Can query Component DOM Element: @ContentChild(CourseImageComponent, { read: ElementRef })
    5. ContentChildren Querying: for Programmatic Reference
       1. Querying for Multiple Images: @ContentChildren(CourseImageComponent) in course-card
       2. Use Content Life-cycle Hook for multiple ref.: AfterContentInit
          Follow the steps used in ViewChild & ViewChildren
