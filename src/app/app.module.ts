import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { FilterComponent } from './filter/filter.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { MoviesComponent } from './movies/movies.component';
import { FilterListComponent } from './filter-list/filter-list.component';
import { ButtonBgDirective } from './custom directives/button-bg.directive';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    FilterComponent,
    HeaderComponent,
    SearchComponent,
    MoviesComponent,
    FilterListComponent,
    ButtonBgDirective,
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
