import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './containers/dynamic-form/dynamic-form.component';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';


import { FormInputNumberComponent } from './components/form-number/form-number.component'
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormStaticComponent } from './components/form-static/form-static.component';


@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatAutocompleteModule
  ],
  declarations: [DynamicFormComponent,
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent,
    DynamicFieldDirective,
    FormInputNumberComponent,
    FormStaticComponent
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  exports: [DynamicFormComponent],
  entryComponents: [
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent,
    FormInputNumberComponent,
    FormStaticComponent
  ],
})
export class DynamicFormModule { }