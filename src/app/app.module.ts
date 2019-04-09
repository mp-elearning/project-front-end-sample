import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlockchainBlogsComponent } from './blockchain-blogs/blockchain-blogs.component';
import { GreBlogsComponent } from './gre-blogs/gre-blogs.component';
import { BitcoinBlogsComponent } from './bitcoin-blogs/bitcoin-blogs.component';
import { EachBlogComponent } from './blogs/each-blog/each-blog.component';
import { VideosComponent } from './videos/videos.component';


import { NgxYoutubePlayerModule } from 'ngx-youtube-player';


@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent,
    BlockchainBlogsComponent,
    GreBlogsComponent,
    BitcoinBlogsComponent,
    EachBlogComponent,
    VideosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxYoutubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
