import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsComponent } from 'src/app/blogs/blogs.component';

const routes: Routes = [

    {path : 'blogs', component : BlogsComponent},
    {}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
