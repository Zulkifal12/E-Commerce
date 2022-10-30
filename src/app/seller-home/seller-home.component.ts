import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';
import {faTrash} from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css'],
})
export class SellerHomeComponent implements OnInit {
  productlist: undefined | product[];
  deleteMessage: undefined | string;
  Trashicon = faTrash;
  constructor(private product: ProductService) {}

  ngOnInit(): void {
    this.list();
  }

  deleteProduct(id: number) {
    this.product.deleteProduct(id).subscribe((result) => {
      if (result) {
        this.deleteMessage ='Item Deleted Successfully';
        this.list();
      }
      setTimeout(() => {
        this.deleteMessage = undefined;
      }, 3000);
    });
  }

  list() {
    this.product.productlist().subscribe((result) => {
      console.warn(result);
      this.productlist = result;
    });
  }
}
