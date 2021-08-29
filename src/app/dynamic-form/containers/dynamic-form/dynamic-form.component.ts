
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { FieldConfig } from '../../models/field-config.interface';

@Component({
  exportAs: 'dynamicForm',
  selector: 'dynamic-form',
  styleUrls: ['dynamic-form.component.scss'],
  templateUrl:'dynamic-form.component.html'
})
export class DynamicFormComponent implements OnChanges, OnInit {
  @Input()
  config: FieldConfig[] = [];

  @Output()
  submit: EventEmitter<any> = new EventEmitter<any>();

  form!: FormGroup; 

  get controls() {
    return this.config && this.config.filter(({ type }) => type !== 'button');
  }
  get changes() { return this.form.valueChanges; }
  get valid() { return this.form.valid; }
  get value() { return this.form.value; }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.createGroup();
  }

  ngOnChanges() {
    this.form = this.createGroup();
    if (this.form) {
      const controls = Object.keys(this.form.controls);
      const configControls = this.controls && this.controls.map((item: any) => item.genericName);
      controls
        .filter((control) => !configControls.includes(control))
        .forEach((control) => this.form.removeControl(control));
      configControls && configControls
        .filter((control) => !controls.includes(control))
        .forEach((name) => {
          let config: FieldConfig | undefined
          config = this.config.find((control: any) => control.genericName === name);
          this.form.addControl(name, this.createControl(config));
        });
    }
  }

  createGroup() {
    const group = this.fb.group({});
    this.controls?.forEach((control: any) => 
        group.addControl(control.genericName, this.createControl(control))
    )
    return group;
  }

  createControl(config: FieldConfig | undefined) {
    if(!config) return this.fb.control({})
    const { disabled, validation, value } = config;
    if (config.hasOwnProperty('isRequired') && config['isRequired']) {
      if (config.type === 'number')
        return this.fb.control({ disabled, value }, [Validators.pattern("^[0-9]*$")])
      if (config.type === 'static')
        return this.fb.control(value)
      return this.fb.control({ disabled, value });
    } else {
      if (config.type === 'number')
        return this.fb.control({ disabled, value }, [Validators.required, Validators.pattern("^[0-9]*$")])
      if (config.type === 'static')
        return this.fb.control(value)
      return this.fb.control({ disabled, value }, [Validators.required])
    }
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.submit.emit(this.value);
  }

  setDisabled(name: string, disable: boolean) {
    if (this.form.controls[name]) {
      const method = disable ? 'disable' : 'enable';
      this.form.controls[name][method]();
      return;
    }

    this.config = this.config.map((item: any) => {
      if (item.genericName === name) {
        item.disabled = disable;
      }
      return item;
    });
  }

  setValue(name: string, value: any) {
    this.form.controls[name].setValue(value, { emitEvent: true });
  }
}