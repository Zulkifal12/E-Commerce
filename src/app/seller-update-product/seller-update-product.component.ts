import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css'],
})
export class SellerUpdateProductComponent implements OnInit {
  productdata: undefined | product;
  productMessage:undefined |string;
  constructor(private route: ActivatedRoute, private product: ProductService) {}

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id');
    productId && 
    this.product.getProduct(productId).subscribe((data)=>{
      this.productdata = data;
    })
    
  }

  submit(data:product) {
    if(this.productdata){
      data.id = this.productdata.id;
      this.product.updateProduct(data).subscribe((result)=>
      {
        if(result){
        this.productMessage = "Product Updated Successfully."
        }
      });
      setTimeout(()=>
      {
        this.productMessage = undefined;
      },3000);
    }

  }
}
