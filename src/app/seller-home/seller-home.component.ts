import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
  productlist:undefined | product[]
  constructor(private product:ProductService) { }
  
  ngOnInit(): void {
    this.product.productlist().subscribe((result)=>{
     console.warn(result);
     this.productlist = result;
     console.log(this.productlist)
    })
  }

}
