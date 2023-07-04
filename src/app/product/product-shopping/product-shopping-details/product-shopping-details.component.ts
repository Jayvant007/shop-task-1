import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/model/newProduct.model';
import { ProductService } from 'src/app/shared/model/service/productService.service';

@Component({
  selector: 'app-product-shopping-details',
  templateUrl: './product-shopping-details.component.html',
  styleUrls: ['./product-shopping-details.component.css']
})
export class ProductShoppingDetailsComponent implements OnInit {
  shopArray : Product [] =[]
constructor(private proServe : ProductService){}
  ngOnInit(): void {
     this.proServe.productSub.subscribe((param:any)=>{
      this.shopArray = param
      // console.log(this.shopArray)
     })
  }

}
