import { NgModule } from '@angular/core';
import { Routes, RouterModule, provideRoutes } from '@angular/router';
import { BlogsComponent } from 'src/app/blogs/blogs.component';
import { BitcoinBlogsComponent } from 'src/app/bitcoin-blogs/bitcoin-blogs.component';
import { GreBlogsComponent } from 'src/app/gre-blogs/gre-blogs.component';
import { BlockchainBlogsComponent } from 'src/app/blockchain-blogs/blockchain-blogs.component';
import { VideosComponent } from './videos/videos.component';
import { EachBlogComponent } from 'src/app/blogs/each-blog/each-blog.component';
import { SignInComponent } from 'src/app/sign-in/sign-in.component';
import { SignUpComponent } from 'src/app/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
 
    {path : 'blogs', component : BlogsComponent},
    {path : 'bitcoin', component : BitcoinBlogsComponent},
    {path : 'gre', component : GreBlogsComponent},
    {path : 'blockchain', component : BlockchainBlogsComponent},
    {path: 'videos', component : VideosComponent},
    {path: 'eachblog', component : EachBlogComponent},
    {path: '',  component: SignInComponent },
    {path: 'signup',  component:SignUpComponent},
    {path: 'home',  component:HomeComponent},


    
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

//bootstrap: [ AppComponent ]
})

export class AppRoutingModule { }
export const routingComponents = [VideosComponent,BlogsComponent,BlockchainBlogsComponent,GreBlogsComponent]
