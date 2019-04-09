import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blockchain-blogs',
  templateUrl: './blockchain-blogs.component.html',
  styleUrls: ['./blockchain-blogs.component.css',
              '../../assets/css-styles/main_styles.css',
              '../../assets/css-styles/elements_responsive.css',
              '../../assets/css-styles/elements_styles.css',
              '../../assets/css-styles/responsive.css']
})
export class BlockchainBlogsComponent implements OnInit {

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
    title : "Blockchain vs Bitcoin",
  author : "Shruti Babu",
  contentSummary : "Bitcoin: Bitcoin is a crypto-currency (a kind of digital currency), mainly created to simplify a transaction without having third-party intermediaries. It all started when this mysterious man under the name of Satoshi Nakamoto (whose actual identity is still unknown) published a white-paper named Bitcoin: A Peer-to-Peer Electronic Cash System in 2009. A Satoshi is the smallest unit of Bitcoin. Blockchain : Blockchain is a data structure or ledger that stores information about any transactions that occurs(not just bitcoin). Anything that is stored once can’t be changed or modified. This feature of Blockchain makes it the most secure. It is decentralized and establishes a peer to peer network thus eliminating any middle-men.",
  tags : [ "blockchain","bitcoin"]
   },

  ]


}
