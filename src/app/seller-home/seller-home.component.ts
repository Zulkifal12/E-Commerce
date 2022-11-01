import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';
import {faTrash,faEdit} from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css'],
})
export class SellerHomeComponent implements OnInit {
  productlist: undefined | product[];
  deleteMessage: undefined | string;
  Trash_icon = faTrash;
  edit = faEdit;
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
      this.productlist = result;
    });
  }
}
