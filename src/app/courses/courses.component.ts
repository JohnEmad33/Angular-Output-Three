import { Component } from '@angular/core';
import { CoursesService } from '../Services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courses: {
    id: number,
    name: string,
    author: string,
    duration: number,
    type: string,
    price: number,
    ratings: number,
    image: string,
    description: string
  }[] = [];

  courseCountRadioButton: string = 'All';
  searchText: string = '';

  constructor(private coursesService: CoursesService) {
    this.coursesService.searchValue.subscribe(
      (value: string) => { this.searchText = value }
    )
  }

  ngOnInit() {
    this.courses = this.coursesService.courses;
  }

  getTotalMovies() {
    return this.courses.length;
  }
  getTotalFreeMovies() {
    return this.courses.filter((course) => course.type === 'Free').length;
  }
  getTotalPremiumMovies() {
    return this.courses.filter((course) => course.type === 'Premium').length;
  }

  onFilterRadioButtonChanged(data: string) {
    this.courseCountRadioButton = data;
  }

  onSearchTextEntered(event: string) { }
}
