/**\*\***\*\***\*\*** Angular Directives Setup **\*\***\*\*\***\*\***/

1. git link
   https://github.com/angular-university/angular-course/tree/2-directives

2. git checkout -b 2-directives origin/2-directives.

/**\*\***\*\***\*\*** Angular Directives Types **\*\***\*\*\***\*\***/

1. Components directives with Template
2. Structural Directives: *ngIf : *ngFor : \*ngSwitch
   1. These attributes added to element of page, such as, plain HTML div, or Components
   2. Attributes either modify the behavior of that elements
3. Attribute Directives:
   1. Form attributes, such as, required and disabled applied to form input field.

/**\*\***\*\***\*\*** Angular Directives Types **\*\***\*\*\***\*\***/

1. Generating highlighted directives:
   ng g directive directives/highlighted
2. Attribute Selector: selector: "[highlighted]"
   Any Element that is highlighted attribute will be effected by it.

/**\*\***\*\***\*\*_ Angular HOST Binding DOM Properties VS Attributes _\*\***\*\*\***\*\***/

1.  Directives are applied to Host Elements (highlighted styles are in assets/styles.css)
    1.  Applying Directives as className:
        1. Select Element from the web.
        2. In Web Console type "$0" ; this gives the current element
        3. Applying className: $0.className = 'highlighted' and press enter
    2.  Applying Directives on host through HostBing Decorator
        1.  Apply it in directives.ts: @HostBinding("class.highlighted") when highlighted selector is applied on HTML element:
            <course-card highlighted
            (courseSelected)="onCourseSelected($event)"
            [course]="course">
    3.  Apply Highlighted Directives as an Input value in HTML element
        1. Replace highlighted with [highlighted]="true" when applying as Input property for Highlighted directives.
        2. Add to highlighted.directive.ts
           @Input("highlighted")
           isHighlighted = false;
    4.  Apply HTML Attributes to components
        1.  @HostBinding("attr.disabled")
            get disabled() {
            return "true";
            }
    5.  Apply Directives through HOST Listener
        1.  Add @HostListener("mouseover")
        2.  Add @HostListener("mouseleave")
        3.  To Get native DOM Event, Add $event variable to HostListener
            @HostListener("mouseover", ["$event"])
            mouseOver($event) {
            //L30: To display cursor position
            console.log($event);
    6.  Custom Event
        1.  Add @Output toggleHighlight trigger
        2.  Emit Value ON & OFF with toggleHighlight trigger
        3.  Add toggleHighlight event to App Template
    7.  Angular Attribute Directive Export Syntax.
        1.  Directive Access Level
            1. App Template Level
            2. App Component Level
               A third party API is available in highlighted directive
               /**\***A. App Template Level Access**\***/
               1. A toggle() method that emits isHighlighted value in App Template & Component Level on trigger.
               2. Define exportAs: "hl" Reference in highlighted.directives
               3. Define #highlighter ='hl' Template reference in App Template as #highlighter
               4. Define Double Click Event in App Template as such
                  (dblclick)="highlighter.toggle()"
                  /**\*\***B. App Component Level Access**\***/
               5. Define @ViewChild(HighlightedDirective) directly or
               6. Define @ViewChild(CourseCardComponent, { read: HighlightedDirective }) through card component
               7. Vie log in ngAfterViewInit() {
                  // L31: Logging HighLighted value after triggering it
                  console.log(this.highlighted);
                  }
    8.  Angular Structural Directives - Custom Structural Directives
        Used to ADD or Remove Element from the page. Has \* in the beginning
        1. Generate Custom Structural Directive
           ng generate directive directives/ngx-unless
           Note:ngx means extended directive not part of angular code but extra one.
        2. Define Programmatic Reference to Template in custom directive
           constructor(private templateRef: TemplateRef<any>) { }
        3. Instantiating the View by ViewContainerRef
        4. Receive ngxUnless property by setter Method to Implement the Condition for view
        5. Define Reference for ngxUnless in ngxUnless directive.

/**\*\***\*\***\*\*_ Angular View Encapsulation _\*\***\*\*\***\*\***/

1. Angular Host Selector :host
   1. To Target Host HTML Element of the Component itself
   2. Host styles are applied as nghost-c1, nghost-c2...c13, etc
   3. All the component's host or content related styles should be moved to card-component.css
2. Angular ng-deep modifier (::ng-deep)
   1. .course-card .course-description:
      Angular View Encapsulation consider this an App style and not component
   2. And that is why properties are not applied properly despite .course-card as prefix
   3. To Avoid this situation use ng-deep modifier
      .course-card ::ng-deep .course-description
      App style attaches ng-content-xtp-c16 attribute
      Component style attaches ng-content-clw-c12 attribute which is different then App attribute
   4. Part after ng-deep is not going to be specific to particular component.
   5. Part before ng-deep is going to be specific to particular component with attached ng-content-c2 attribute.
   6. ng-deep is used to style elements that are received in component via content projection.
3. Angular host-context() CSS Modifier
   1. Apply CSS declaration to card component css file
   2. Define specific class for the card component css to be applied to the component part of the page
   3. Reference the class in App Template:
      <div class="courses salmon-theme" *ngIf="courses[0] as course">
   4. Use Angular host-context() css modifier:
      :host-context(.salmon-theme) .course-card {
4. Types of Angular View Encapsulation
   An encapsulation policy for the component's styling. Possible values:

   1. ViewEncapsulation.Emulated: Uses Angular content attributes: Apply modified component styles in order to emulate a native Shadow DOM CSS encapsulation behavior.
   2. ViewEncapsulation.None: For Plan CSS: Apply component styles globally without any sort of encapsulation.
   3. ViewEncapsulation.ShadowDom: Creates a new Browser Document, combines CSS in shadow-root: Use the browser's native Shadow DOM API to encapsulate styles.

   If not supplied, the value is taken from the CompilerOptions which defaults to ViewEncapsulation.Emulated.

   If the policy is ViewEncapsulation.Emulated and the component has no Component#styles styles nor Component#styleUrls styleUrls, the policy is automatically switched to ViewEncapsulation.None.

/**\*\***\*\***\*\*_ Angular Injectable Services _\*\***\*\*\***\*\***/
Whereby Angular contacts Database and display data interactively via View Template
