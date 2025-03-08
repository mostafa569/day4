import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { RouterLink } from '@angular/router';
import { Iproduct } from '../../Models/iproduct';

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  products!: Iproduct[];
  constructor(private allProduct: ProductService) {}
  ngOnInit(): void {
    this.allProduct.getAllProducts().subscribe({
      next: (data) => {
        this.products = data;
      },

      error: (err) => console.log(err),
    });
  }
  deleteProductHandler(productId:string){
    this.allProduct.deleteProduct(productId).subscribe({
      next:()=>{
        this.products=this.products.filter(product=>product.id!==productId)
      }
    })
  }
}
