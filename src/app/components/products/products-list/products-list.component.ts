import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { EventDriverService } from 'src/app/state/event.driver.service';
import { ActionEventNavbar, ActionType, AppDataState, DataStateEnum } from 'src/app/state/product.state';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  @Input()
  products$?: Observable<AppDataState<Product[]>>;
  //@Output()
  //eventEmitter: EventEmitter<ActionEventNavbar> = new EventEmitter()
  readonly DataStateEnum = DataStateEnum;
  constructor(private eventDriver: EventDriverService) { }

  ngOnInit(): void {
  }
  /*
  selected(p: Product) {
    this.eventDriver.publisher({ type: ActionType.GET_SELECTED_PRODUCT, payload: null })
  }
  OnDelete(p: Product) {
    this.eventDriver.publisher({ type: ActionType.DELETE_PRODUIT, payload: null })
  }
  onUpdate(p: Product) {
    this.eventDriver.publisher({ type: ActionType.UPDATE_PRODUIT, payload: null })
  }
*/
}
