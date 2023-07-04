import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/model/newProduct.model';
import { ProductService } from 'src/app/shared/model/service/productService.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
productArr : Product [] = [];
constructor(private productServe : ProductService){}
  ngOnInit(): void {
    this.productServe.productSub.subscribe((param : Product[])=>{
        this.productArr = param
    })
  }
}
