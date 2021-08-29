import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'form-static',
  styleUrls: ['form-static.component.scss'],
  templateUrl: 'form-static.component.html'
})
export class FormStaticComponent implements OnInit {
  config: any;
  group!: FormGroup;

  ngOnInit() {
    this.group.get([this.config.genericName])?.setValue(this.config.static)
  }
}


