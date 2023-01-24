import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CoursesService } from 'src/app/Services/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  course: any;
  courseId: number;

  constructor(private route: ActivatedRoute, private coursesService: CoursesService) {
    this.course = {};
    this.courseId = 0;
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => { this.courseId = +params['id'] }
    )
    this.course = this.coursesService.courses.filter(course => course.id === this.courseId);
  }
}
