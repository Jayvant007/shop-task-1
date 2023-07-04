import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductShoppingDeatilsComponent } from './product-shopping-deatils.component';

describe('ProductShoppingDeatilsComponent', () => {
  let component: ProductShoppingDeatilsComponent;
  let fixture: ComponentFixture<ProductShoppingDeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductShoppingDeatilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductShoppingDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
