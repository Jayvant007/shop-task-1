import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductShoppingDetailsComponent } from './product-shopping-details.component';

describe('ProductShoppingDetailsComponent', () => {
  let component: ProductShoppingDetailsComponent;
  let fixture: ComponentFixture<ProductShoppingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductShoppingDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductShoppingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
