import { Component,  OnInit,  } from '@angular/core';
import { ProductService } from 'src/app/shared/model/service/productService.service';

@Component({
  selector: 'app-product-shopping',
  templateUrl: './product-shopping.component.html',
  styleUrls: ['./product-shopping.component.css']
})
export class ProductShoppingComponent implements OnInit  {
  shopArray : any [] =[];
  newObj :any
  totalSum : number =0;
  num : any;
constructor(private prodServ : ProductService){}
  

  ngOnInit(): void {
    this.prodServ.productSub.subscribe((param:any)=>{
      this.shopArray = param
      this.totalSum = this.prodServ.calcTotal()
    })
    
  }
  onCancel(index : number,obj:any){
    obj.npQty=0;
    this.prodServ.modifiedProductList(index,obj)
  }
}
