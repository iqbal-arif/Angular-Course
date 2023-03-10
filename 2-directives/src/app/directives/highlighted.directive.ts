import {
  Directive,
  HostBinding,
  Input,
  HostListener,
  Output,
  EventEmitter,
} from "@angular/core";

@Directive({
  selector: "[highlighted]", //Attribute Selector
  exportAs: "hl", //L31: Reference for Toggle Method to be triggered at App level
})
export class HighlightedDirective {
  // L29: Input Property Decorator
  @Input("highlighted")
  isHighlighted = false; //Default value is set to false

  // L30: ToggleHighlight: Trigger when highlight is ON (mouseover) & OFF (mouseleave)
  @Output()
  toggleHighlight = new EventEmitter();

  constructor() {
    console.log("Directive created...");
  }
  // L29: Applying Directive Attribute as className (A DOM Property) to Host element
  // Option 1:
  // @HostBinding("className")
  // get cssClasses() {
  //   return "highlighted";
  // }
  // L29: Shorthand notation for class since class property is a know DOM Property
  // Option 2:
  @HostBinding("class.highlighted")
  get cssClasses() {
    // L29: This below code is for option 2
    // L29: return true;
    // L29: This code is for highlighted as a input value
    return this.isHighlighted;
  }

  // L29: Example of Applying border property. Not a part of Highlighted lesson
  // Activate it to test while deactivate other cssClasses to avoid duplication error
  // @HostBinding("style.border")
  // get cssClasses() {
  //   return "1px solid red";
  // }

  // L29:  Applying HTML Attributes To components
  @HostBinding("attr.disabled")
  get disabled() {
    return true;
  }

  // L30: Applying Directives with HOST Listener
  // L30 : To View DOM native Event add $event variable
  @HostListener("mouseover", ["$event"])
  mouseOver($event) {
    //L30: To display cursor position
    console.log($event);
    this.isHighlighted = true;
    // L30: Emitting the toggle value ON
    this.toggleHighlight.emit(this.isHighlighted);
  }
  @HostListener("mouseleave")
  mouseLeave() {
    this.isHighlighted = false;
    // L30: Emitting the toggle value OFF
    this.toggleHighlight.emit(this.isHighlighted);
  }

  // L31: Third party API, such as, A Toggle Method is give
  // This method can be called by App Template OR App Component
  toggle() {
    this.isHighlighted = !this.isHighlighted;
    this.toggleHighlight.emit(this.isHighlighted);
  }
}
