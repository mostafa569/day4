import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getAllProducts() {
  
    return [
      { id: 1, name: 'book', price: 200, quantity: 10 },
      { id: 2, name: 'pen', price: 100, quantity: 50 },
      { id: 3, name: 'watch', price: 50, quantity: 5 },
      { id: 4, name: 'phone', price: 9000, quantity: 2 },
    ];
  }
  
}
