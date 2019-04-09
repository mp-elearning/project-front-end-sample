import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsComponent } from 'src/app/blogs/blogs.component';
import { BitcoinBlogsComponent } from 'src/app/bitcoin-blogs/bitcoin-blogs.component';
import { GreBlogsComponent } from 'src/app/gre-blogs/gre-blogs.component';
import { BlockchainBlogsComponent } from 'src/app/blockchain-blogs/blockchain-blogs.component';

const routes: Routes = [

    {path : '', component : BlogsComponent},
    {path : 'bitcoin', component : BitcoinBlogsComponent},
    {path : 'gre', component : GreBlogsComponent},
    {path : 'blockchain', component : BlockchainBlogsComponent},
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
