import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../common/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  private getCategoryUrl = `${environment.baseUrl}/categories/getAllCategory`
  constructor(private http: HttpClient) { }

  getAllCategory():Observable<Category>{
      return this.http.get<Category>(this.getCategoryUrl);
  }
}
