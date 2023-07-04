import { Component, ElementRef,  Input, OnInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/shared/model/service/productService.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
@Input() prodData : any 
@Input() prodIndex : any;
shopObj : any;

addedQty : number =0;
@ViewChild('qty') qty :   ElementRef | any
constructor(private productServ : ProductService){}
  ngOnInit(): void {
  }
addByOne(){
this.addedQty++
}
minusByOne(){
  if(this.addedQty > 0){
    this.addedQty--;
  }else{
    this.addedQty=0
  }
}
  inputOne(){
    this.addedQty = this.qty.nativeElement.value;
  }
  OnAddBag(){
    this.shopObj = this.prodData;
    this.shopObj.npQty = this.addedQty;
    this.productServ.modifiedProductList(this.prodIndex,this.shopObj)
  }
}
