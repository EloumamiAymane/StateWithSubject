import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ActionEventNavbar } from 'src/app/state/product.state';
import { ActionType } from '../../../state/product.state';
import { EventDriverService } from 'src/app/state/event.driver.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input()
  produit?: Product


  constructor(private eventDriver: EventDriverService) { }

  ngOnInit(): void {
  }
  selected(p: Product) {
    this.eventDriver.publisher({ type: ActionType.SELECT_PRODUIT, payload: p })
  }
  onUpdate(p: Product) {
    this.eventDriver.publisher({ type: ActionType.UPDATE_PRODUIT, payload: p })
  }
  OnDelete(p: Product) {
    this.eventDriver.publisher({ type: ActionType.DELETE_PRODUIT, payload: p })
  }
}
