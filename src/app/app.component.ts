import { Component } from '@angular/core';
import * as data from '../assets/data.json'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  detailsForm: any = (data as any).default;
  title = 'dynamicForm';
}
