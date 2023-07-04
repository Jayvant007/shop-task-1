import { Component, ViewChild } from '@angular/core';
import { ProductService } from '../shared/model/service/productService.service';
import { Product } from '../shared/model/newProduct.model';


@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.css']
})
export class AddProductFormComponent {
  fileSizeError = false;
   imageDataUrl : string | ArrayBuffer | null;
  @ViewChild('productForm') productObj : any;
constructor(private prodServe : ProductService){
  this.imageDataUrl = null;
}
  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      const fileSize = file.size; // in bytes
      const maxSize = 100 * 1024; // 100 KB

      if (fileSize > maxSize) {
        this.fileSizeError = true;
      } else {
        this.fileSizeError = false;
             const reader = new FileReader();
      reader.onload = (e) => {
        this.imageDataUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
      }
    
  }

onSubmit(){
  let newObj = new Product(this.productObj.value.npName,this.productObj.value.npPrice,this.productObj.value.npImgPath)
  this.prodServe.addNewProduct(newObj);
  console.log(newObj)
}
}
