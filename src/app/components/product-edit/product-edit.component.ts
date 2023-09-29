import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventDriverService } from 'src/app/state/event.driver.service';
import { ActionType } from 'src/app/state/product.state';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productId: number;
  productFormGroup?: FormGroup;
  submited?: boolean = false;
  constructor(private activateRoute: ActivatedRoute,
    private productsService: ProductService, private fb: FormBuilder,
    private eventDriver: EventDriverService) {
    this.productId = activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.productsService.getProduct(this.productId).subscribe(data => {
      this.productFormGroup = this.fb.group({
        id: [data.id, Validators.required],
        name: [data.name, Validators.required],
        price: [data.price, Validators.required],
        quantity: [data.quantity, Validators.required],
        selected: [data.selected, Validators.required],
        available: [data.available, Validators.required]
      })
    })
  }
  OnUpdateProduct() {
    this.submited = true;

    if (this.productFormGroup?.invalid) return;
    this.productsService.updateProduct(this.productFormGroup?.value).subscribe(data => {
      this.eventDriver.publisher({ type: ActionType.PRODUCT_UPDATED })
      alert("product Updated!");
    })
  }
}
