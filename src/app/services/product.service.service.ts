import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { Observable } from 'rxjs';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private getProductUrl = `${environment.baseUrl}/products/getAllProduct`

  constructor(private http: HttpClient) { }

  getAllProduct(page:number, limit:number):Observable<Product[]>{
    const params = new HttpParams()
          .set("page", page.toString())
          .set("limit", limit.toString())
      return this.http.get<Product[]>(this.getProductUrl,{params})
  }
}
