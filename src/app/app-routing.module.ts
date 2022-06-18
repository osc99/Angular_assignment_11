import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { ErrorComponent } from './error/error.component';
import { TechnologyComponent } from './technology/technology.component';

const routes: Routes = [
  {path:'books', component:BooksComponent},
  {path:'technology', component:TechnologyComponent},
  {path:'', component:TechnologyComponent},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
