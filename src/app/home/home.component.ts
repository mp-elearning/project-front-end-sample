import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',
              '../../assets/css-styles/main_styles.css',
               '../../assets/css-styles/elements_responsive.css',
               '../../assets/css-styles/elements_styles.css',
               '../../assets/css-styles/responsive.css'
              ]
})

export class HomeComponent implements OnInit {
  router: any;
 

  constructor() { }

  ngOnInit() {
  }

  blogData :any = [{
    title : "Introduction to Blockchain technology",
    author : "Achiv Chauhan",
    contentSummary : "Blockchain technology has been garnering great hype recently. It gained popularity after the introduction of Bitcoin in 2009 by the person or group of people by the pseudonym Satoshi Nakamoto. Many people confuse and believe blockchain to be bitcoin. But, bitcoin is one application of the blockchain technology. There are many other applications and use cases that can be solved using blockchain other than just payment systems.",
    tags : [ "blockchain"]
   },
   {
    title : "How Does the Blockchain Work?",
  author : "Anubhav Ujjawal",
  contentSummary : "Blockchain provides immutability (it’s theoretically possible to mutate the contents but its practically impossible most of the times because of the computational power required, unless there is a bug, which happened to ethereum once and it resulted in a hard fork, thus creating two versions of it, and thus two currencies, ethereum and ethereum classic).Blockchain provides Transparency and trust. Blockchain is shared, and hence it allows the system to be transparent and everybody can verify the data present in it.",
  tags : [ "blockchain"]
   },
   {
    title : "Important Tips on How To Prepare for the GRE",
  author : "Ria Raval",
  contentSummary : "Graduate Record Examinations (GRE) is the prestigious competitive exam taken for admission in graduate schools across the United States. Preparing for GRE is therefore important. Following are the tips, which must be kept in mind while preparing for GRE-Choose the study material wisely: It is important to carefully choose what you read. Good study material helps in strengthening the concepts. It is advised to follow any one GRE preparation book by some known publication house.",
  tags : [ "GRE" ]
   },
   {
    title : "Blockchain vs Bitcoin",
  author : "Shruti Babu",
  contentSummary : "Bitcoin: Bitcoin is a crypto-currency (a kind of digital currency), mainly created to simplify a transaction without having third-party intermediaries. It all started when this mysterious man under the name of Satoshi Nakamoto (whose actual identity is still unknown) published a white-paper named Bitcoin: A Peer-to-Peer Electronic Cash System in 2009. A Satoshi is the smallest unit of Bitcoin. Blockchain : Blockchain is a data structure or ledger that stores information about any transactions that occurs(not just bitcoin). Anything that is stored once can’t be changed or modified. This feature of Blockchain makes it the most secure. It is decentralized and establishes a peer to peer network thus eliminating any middle-men.",
  tags : [ "blockchain","bitcoin"]
   },

  ]
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
  
  
  bData :any = [{
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

