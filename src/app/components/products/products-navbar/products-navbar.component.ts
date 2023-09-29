import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActionEventNavbar, ActionType } from 'src/app/state/product.state';
import { EventDriverService } from '../../../state/event.driver.service';

@Component({
  selector: 'app-products-navbar',
  templateUrl: './products-navbar.component.html',
  styleUrls: ['./products-navbar.component.css']
})
export class ProductsNavbarComponent implements OnInit {
  productFormGroup!: FormGroup;

  constructor(private fb: FormBuilder, private eventDriver: EventDriverService) { }

  ngOnInit(): void {
    this.productFormGroup = this.fb.group({
      keyword: this.fb.control('')
    }

    )
  }
  onGetAllProduct() {
    this.eventDriver.publisher({ type: ActionType.GET_ALL_PRODUCT, payload: null })
  }
  onGetSelectedProduct() {
    this.eventDriver.publisher({ type: ActionType.GET_SELECTED_PRODUCT })
  }
  onGetAvailableProduct() {
    this.eventDriver.publisher({ type: ActionType.GET_AVAILABLE_PRODUCT })
  }
  onNewProduct() {
    this.eventDriver.publisher({ type: ActionType.GET_NEW_PRODUCT })
  }
  onSearch() {
    this.eventDriver.publisher({ type: ActionType.GET_SEARCH_PRODUCT, payload: this.productFormGroup.value.keyword })
  }
}
