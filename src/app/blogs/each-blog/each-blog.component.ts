import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-each-blog',
  templateUrl: './each-blog.component.html',
  styleUrls: ['./each-blog.component.css',
              '../../../assets/css-styles/main_styles.css',
              '../../../assets/css-styles/elements_responsive.css',
              '../../../assets/css-styles/elements_styles.css',
              '../../../assets/css-styles/responsive.css',
              '../../../assets/css-styles/blog_post_styles.css',
              '../../../assets/css-styles/blog_post_responsive.css',
              '../../../assets/css-styles/blog_responsive.css'
              
              ]
})
export class EachBlogComponent implements OnInit {
  data
  constructor(route:ActivatedRoute) {
    console.log('in each blog')
    this.data=route.snapshot.params["d"];
    // console.log((route.snapshot.params.d))
   }

  ngOnInit() {
  }

}
