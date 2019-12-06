import { Component, OnInit, OnDestroy } from '@angular/core';
import { RequeteService } from '../services/requete.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { WishlistRequete } from '../models/sharedClass';

@Component({
  selector: 'app-find-all',
  templateUrl: './find-all.component.html',
  styleUrls: ['./find-all.component.scss']
})
export class FindAllComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  wishlists: WishlistRequete[] = [];

  constructor(public readonly requete: RequeteService, private router:Router) { }

  async ngOnInit() {
    this.subscription = await this.requete.getWishlist()
      .subscribe(data => this.wishlists = data,
        () => console.log('error'),
        () => console.log(this.wishlists));      
  }

  async delete(wishlistId: string) {
    try {
      await this.requete.deleteWishlist(wishlistId).subscribe();
    } catch (error) {
      console.log(error);      
      return
    }
    this.wishlists.splice(this.wishlists.findIndex(elemToDelete => elemToDelete._id == wishlistId), 1);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }



}
