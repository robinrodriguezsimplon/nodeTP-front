import { Component, OnInit } from '@angular/core';
import { WishlistRequete } from '../models/sharedClass';
import { RequeteService } from '../services/requete.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.scss']
})
export class CreateListComponent implements OnInit {
  subscription: Subscription;
  name: string;
  gift: string;

  constructor(public readonly requete: RequeteService, private router:Router) { }

  ngOnInit() {
  }

  async sendList() {
    let wishList: WishlistRequete = new WishlistRequete();
    wishList.name = this.name;
    wishList.gift = this.gift;
    try {
      await this.requete.createWishlist(wishList).subscribe( 
        () => this.router.navigate([''])
      );      
    } catch (error) {
      console.log(error);      
    }
  }

}
