import { Component, Input, OnInit, } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'form-input',
  styleUrls: ['form-input.component.scss'],
  templateUrl:'form-input.component.html' 
})
export class FormInputComponent implements OnInit {
  @Input() config: any;
  group!: FormGroup;

  ngOnInit() {
    console.log('config:', this.config)
  }

  emitFocus(focusType: any) {
    // this.cardService.onFieldFocus(focusType);
  }
}


