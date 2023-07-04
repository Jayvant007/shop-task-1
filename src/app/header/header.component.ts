import { Component } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { AddProductFormComponent } from '../add-product-form/add-product-form.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
constructor(private dialog: MatDialog ){}
openDialog(): void {
  this.dialog.open(AddProductFormComponent,{
    width : '500px',
  });
}
}
