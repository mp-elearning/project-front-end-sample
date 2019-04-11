import { Component, OnInit } from '@angular/core';
import { dataCallBlogsService } from 'src/app/services/data-call-blogs.service';
import { blogData } from 'src/app/classes/blog-data';

@Component({
  selector: 'app-bitcoin-blogs',
  templateUrl: './bitcoin-blogs.component.html',
  styleUrls: ['./bitcoin-blogs.component.css',
              '../../assets/css-styles/main_styles.css',
              '../../assets/css-styles/elements_responsive.css',
              '../../assets/css-styles/elements_styles.css',
              '../../assets/css-styles/responsive.css']
})
export class BitcoinBlogsComponent implements OnInit {

  bData:blogData;

  constructor(
    blogData : blogData,
    blogService :  dataCallBlogsService
  ) { 
    console.log('reached')

    blogService.getdata().subscribe(
      data=>{
        this.bData = data
        console.log(this.bData)
      },(e)=>{
        console.log(e)
      }
    )
  }

  ngOnInit() {
  }

}
