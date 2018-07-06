import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewspageComponent } from './newspage/newspage.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'newspage',
    component: NewspageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
