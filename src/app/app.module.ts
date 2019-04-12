import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { HttpClientModule  } from '@angular/common/http';


import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlockchainBlogsComponent } from './blockchain-blogs/blockchain-blogs.component';
import { GreBlogsComponent } from './gre-blogs/gre-blogs.component';
import { BitcoinBlogsComponent } from './bitcoin-blogs/bitcoin-blogs.component';
import { EachBlogComponent } from './blogs/each-blog/each-blog.component';
//import { VideosComponent } from './videos/videos.component'; working



import { dataCallBlogsService } from 'src/app/services/data-call-blogs.service';
import { blogData } from 'src/app/classes/blog-data';
// import { HttpClient } from '@angular/common/http';

import { UserDetailsComponent } from './user-details/user-details.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';

var config = {
  apiKey: "AIzaSyBp1flSQ2eO4HKbbAGNnYjcuq9rYwGEP20",
  authDomain: "mp-user-data.firebaseapp.com",
  databaseURL: "https://mp-user-data.firebaseio.com",
  projectId: "mp-user-data",
  storageBucket: "mp-user-data.appspot.com",
  messagingSenderId: "797727661249"
};

@NgModule({
  declarations: [
    AppComponent,
    //BlogsComponent,
    BlockchainBlogsComponent,
    GreBlogsComponent,
    BitcoinBlogsComponent,
    EachBlogComponent,
    routingComponents,
    UserDetailsComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxYoutubePlayerModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    FormsModule

  ],
  providers: [dataCallBlogsService,blogData],
  bootstrap: [AppComponent]
})
export class AppModule { }
