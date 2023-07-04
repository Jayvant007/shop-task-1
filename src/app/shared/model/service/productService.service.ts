import { EventEmitter, Injectable } from "@angular/core";
import { Product } from "../newProduct.model";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
    providedIn : 'root'
})
export class ProductService{

   private productList : Product [] = [
        new Product('Coke', 150, 'https://m.media-amazon.com/images/I/61ei1LLKsrL.jpg'),
        new Product('Lays', 100, 'https://m.media-amazon.com/images/I/819HzHWjBHL._AC_UF1000,1000_QL80_.jpg',0),
        new Product('Almonds', 200, 'https://www.netmeds.com/images/cms/wysiwyg/blog/2020/01/1579676013_Almond_Benefits_big_1.jpg',0)
    ]
      bagList : any = [];
    // obj : any
    addInBagList(obj:any): void{
        if(!this.bagList.length){
            this.bagList.unshift(obj);
            this.emitterObj.emit(this.bagList.slice())
        }else {
            this.bagList.forEach((ele : any)=>{
                if(ele.npName == obj.npName){
                    ele.npQty = obj.npQty
                    this.emitterObj.emit(this.bagList.slice())
                }else{
                    this.bagList.unshift(obj)
                    this.emitterObj.emit(this.bagList.slice())
                }
            })
        }
    }
    addNewShopObj = new Subject ();
    productSub = new BehaviorSubject(this.productList.slice())
  
    emitterObj = new EventEmitter()
    modifiedProductList(recIndex:number,newObj:any): void{
        this.productList[recIndex]=newObj;
        this.productSub.next(this.productList.slice())
    }
    calcTotal():number{
        let total : number = 0;
        this.productList.forEach((obj : any)=>{
            total+=(obj.npQty * obj.npPrice)
        })
        return total;
    }
    addNewProduct(obj:any){
        this.productList.unshift(obj);
        this.productSub.next(this.productList.slice())
    }
}


