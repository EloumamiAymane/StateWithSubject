import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/products.service';
import { EventDriverService } from 'src/app/state/event.driver.service';
import { ActionEventNavbar, ActionType } from 'src/app/state/product.state';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  productFormGroup?: FormGroup;
  submited?: boolean = false;
  constructor(private fb: FormBuilder, private ProductsService: ProductService,
    private eventDriver: EventDriverService) { }

  ngOnInit(): void {
    this.productFormGroup = this.fb.group({
      name: ["", Validators.required],
      price: [0, Validators.required],
      quantity: [0, Validators.required],
      selected: [true, Validators.required],
      available: [false, Validators.required]
    })

  }
  OnSaveProduct() {
    console.log("hello !");
    console.log(this.submited);
    this.submited = true;
    console.log(this.submited);
    if (this.productFormGroup?.invalid) return;
    this.ProductsService.saveProduct(this.productFormGroup?.value).subscribe(data => {
      this.eventDriver.publisher({ type: ActionType.PRODUCT_ADDED })


      alert("product Saved!");
      this.submited = false;
    })
  }





}
