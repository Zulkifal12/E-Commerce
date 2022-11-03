import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   popularProducts: undefined | product[];
  constructor(private product:ProductService) { }

  ngOnInit(): void {
   this.product.popularProducts().subscribe((data)=>{
    this.popularProducts = data;
   })

  }

}
