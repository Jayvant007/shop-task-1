import { BehaviorSubject } from "rxjs";

export class ShopService{

private shopList : any [] = [];
shopSub = new BehaviorSubject(this.shopList.slice())
addNewShopProduct(obj :any){
    if(!this.shopList.length){
        this.shopList.unshift(obj);
        this.shopSub.next(this.shopList.slice())
    }else {
        this.shopList.forEach((ele : any)=>{
            if(ele.npName == obj.npName){
                ele.npQty = obj.npQty
                this.shopSub.next(this.shopList.slice())
            }else{
                this.shopList.unshift(obj)
                this.shopSub.next(this.shopList.slice())
            }
        })    
    }
}

}