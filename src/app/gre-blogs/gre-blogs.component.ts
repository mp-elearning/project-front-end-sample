import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gre-blogs',
  templateUrl: './gre-blogs.component.html',
  styleUrls: ['./gre-blogs.component.css',
              '../../assets/css-styles/main_styles.css',
              '../../assets/css-styles/elements_responsive.css',
              '../../assets/css-styles/elements_styles.css',
              '../../assets/css-styles/responsive.css']
})
export class GreBlogsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  blogData :any = [{
   title : "Experimental Section in GRE General",
    author : "riarawal99",
    contentSummary : "The GRE experimental section is the most popular and highly discussed section among all the aspirants. It has gained massive popularity from the fact that no marks are awarded for this particular section. The experimental section can be either verbal, quantitative, or analytical writing task. This section contains a set of new questions that ETS is considering to use in future. Based on the time the aspirant takes to solve these questions, ETS classifies the question as easy, medium or difficult.",
    tags : [ "GRE"]
   },
   {
    title : "Analytical Writing Section in GRE General",
  author : "riarawal99",
  contentSummary : "Analytical Writing is one of the most sought after sections of GRE. Although the score of this section is not added in the overall score still it is mandatory for the GRE aspirants to perform well in this section. A basic word processing program is used to write essays here. No spell check facility is available in this word program and only features like insert, delete, cut, paste and undo are available.",
  tags : [ "GRE"]
   },
   {
    title : "Verbal Section in GRE General",
  author : "riarawal99",
  contentSummary : "The Verbal Section is considered to be the most difficult section among the aspirants in GRE. This section aims to check the aspirant’s ability of evaluating a given comprehension by understanding the meaning of different words used in it. It checks the aspirants ability to draw conclusions from the information provided in the comprehension and answer correctly the questions which follow afterwards. It is an adaptive section.",
  tags : [ "GRE"]
   },

  ]

}
