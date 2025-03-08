import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
baseUrl:string='http://localhost:3005/products'
  constructor(private http:HttpClient) { }
  getAllProducts():Observable<Iproduct[]> {
  
    return this.http.get<Iproduct[]>(this.baseUrl);
  }

  getProductById(productId:string):Observable<Iproduct>{
    return this.http.get<Iproduct>(`${this.baseUrl}/${productId}`)
  }

  addNewProduct(product:any):Observable<Iproduct>{
    return this.http.post<Iproduct>(this.baseUrl,product);
  }

  editProduct(productId:string,product:any):Observable<Iproduct>{
    return this.http.put<Iproduct>(`${this.baseUrl}/${productId}`,product);
  }
  
  deleteProduct(productId:string):Observable<Iproduct>{
    return this.http.delete<Iproduct>(`${this.baseUrl}/${productId}`);
  }
}
