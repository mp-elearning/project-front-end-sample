import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module'

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css',
              '../../assets/css-styles/main_styles.css',
              '../../assets/css-styles/elements_responsive.css',
              '../../assets/css-styles/elements_styles.css',
              '../../assets/css-styles/responsive.css'

            ]
})

export class VideosComponent implements OnInit {

  constructor(   
              private router : Router 
             ) { }

  ngOnInit() {
  }



    title = 'youtube';
    player: YT.Player;
    //private id: string = 'SSo_EIwHSd4';
  
    savePlayer(player) {
      this.player = player;
      console.log('Vide url', player.getVideoUrl());
    }
    onStateChange(event) {
      console.log('player state', event.data);
    }
  
  
  blogData :any = [{
      title : "How does a blockchain work - Simply Explained",
      author : "Palak Keni",
      contentSummary : "What is a blockchain and how do they work? I'll explain why blockchains are so special in simple and plain English!",
      tags : [ "blockchain"],
      id : "SSo_EIwHSd4"
     },

     {
      title : "What Is Hyperledger? The Most Comprehensive Video Ever!",
      author : "Blockgeeks",
      contentSummary : "“Hyperledger is an open source collaborative effort created to advance cross-industry blockchain technologies. It is a global collaboration, hosted by The Linux Foundation, including leaders in finance, banking, Internet of Things, supply chains, manufacturing, and Technology.”",
      tags : [ "blockchain","Hyperledger"],
      id : "k4KKrQOV6SE"
     },

     {
      title : "GRE Preparation for Beginners | How crack GRE verbal & quantitative.      ",
      author : "Placement Interview",
      contentSummary : "Hi Gre aspirants, here in this video we got Sankalp who is sharing his Gre preparation with all the beginners out there watching this video. In the video he going to share that how is prepared for Gre and its different parts like verbal, quantitative and reading comprehensive.",
      tags : [ "gre"],
      id : "PoFam6pOFHE"
     }
     
    ]

    onSubmit(i){
      console.log(i)
      if(i=='GRE'){
        this.router.navigateByUrl('gre')
      }else if(i=='blockchain'){
        this.router.navigateByUrl('blockchain')
      }else{
        this.router.navigateByUrl('bitcoin')
      }
      

    }
    
}




