import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WishlistRequete } from '../models/sharedClass';

@Injectable({
  providedIn: 'root'
})
export class RequeteService {

  private Url: string = "https://app-95e05624-1d46-4a18-be37-7679590edea2.cleverapps.io";
  

  constructor(private http: HttpClient) { }
  

  getWishlist(): Observable<any> {
    return this.http.get<any>(this.Url);
  }

  createWishlist(wishlistRequete: WishlistRequete): Observable<any> {
    return this.http.post<any>(this.Url, wishlistRequete);
  }

  deleteWishlist(wishlistId: string): Observable<any> {
    return this.http.delete<any>(this.Url + '/' + wishlistId);
  }
}
