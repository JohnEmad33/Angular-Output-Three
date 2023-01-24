import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularDataBinding';
  CountRadioButton: string = 'AllCourses';
  
  onFilterRadioButtonChanged(data: string) {
    this.CountRadioButton = data;
  }
}
