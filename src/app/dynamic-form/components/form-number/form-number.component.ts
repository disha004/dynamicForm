import { Component, } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "form-number",
  styleUrls: ["form-number.component.scss"],
  templateUrl:"form-number.component.html"
})
export class FormInputNumberComponent {
  config: any
  group!: FormGroup;

  emitFocus(focusType: any) {
    // this.cardService.onFieldFocus(focusType);
  }
}
