import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css'],
})
export class SellerAddProductComponent implements OnInit {
  constructor(private product: ProductService) {}

   addProductMessage:string |undefined;
  ngOnInit(): void {}

  submit(data: product) {
    this.product.addProduct(data).subscribe((result) => {
      if(result){
        this.addProductMessage = "Product added Successfully."
      }
      setTimeout(()=>this.addProductMessage = undefined,3000)
    });
  }
}
