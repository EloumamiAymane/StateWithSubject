import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/services/products.service';
import { ActionEventNavbar, ActionType, AppDataState, DataStateEnum } from 'src/app/state/product.state';
import { EventDriverService } from 'src/app/state/event.driver.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  //products?: Product[];
  products$?: Observable<AppDataState<Product[]>>;
  readonly DataStateEnum = DataStateEnum;
  productFormGroup?: FormGroup;
  constructor(private fb: FormBuilder, private productsService: ProductService,
    private router: Router, private eventDriverService: EventDriverService) { }


  ngOnInit(): void {
    this.productFormGroup = this.fb.group({
      keyword: this.fb.control(null)
    }

    );
    this.eventDriverService.sourceEventSubjectObservab.subscribe((actionEvent: ActionEventNavbar) => {
      switch (actionEvent.type) {
        case ActionType.GET_ALL_PRODUCT: this.onGetAllProduct(); break;
        case ActionType.GET_SELECTED_PRODUCT: this.onGetSelectedProduct(); break;
        case ActionType.GET_AVAILABLE_PRODUCT: this.onGetAvailableProduct(); break;
        case ActionType.GET_NEW_PRODUCT: this.onNewProduct(); break;
        case ActionType.GET_SEARCH_PRODUCT: this.onSearch(actionEvent.payload); break;
        case ActionType.SELECT_PRODUIT: this.selected(actionEvent.payload); break;
        case ActionType.UPDATE_PRODUIT: this.onUpdate(actionEvent.payload); break;
        case ActionType.DELETE_PRODUIT: this.OnDelete(actionEvent.payload); break;

      }
    })
  }

  onGetAllProduct() {

    this.products$ = this.productsService.getAllProduct().pipe(
      map(data => {
        console.log("data" + data)
        return ({ dataState: DataStateEnum.LOADED, data: data })
      }),

      startWith({ dataState: DataStateEnum.LOADING }),
      catchError(err => of({ dataState: DataStateEnum.ERROR, errorMessage: err.message }))
    )

  }
  onGetSelectedProduct() {
    this.products$ = this.productsService.getSelectedProduct().pipe(
      map(data => {

        return ({ dataState: DataStateEnum.LOADED, data: data })
      }),

      startWith({ dataState: DataStateEnum.LOADING }),
      catchError(err => of({ dataState: DataStateEnum.ERROR, errorMessage: err.message }))
    )
  }
  onGetAvailableProduct() {
    this.products$ = this.productsService.getAvailableProduct().pipe(
      map(data => {

        return ({ dataState: DataStateEnum.LOADED, data: data })
      }),

      startWith({ dataState: DataStateEnum.LOADING }),
      catchError(err => of({ dataState: DataStateEnum.ERROR, errorMessage: err.message }))
    )
  }
  onSearch(keyword: string) {
    //let keyword = this.productFormGroup?.value.keyword;
    console.log(keyword);
    this.products$ = this.productsService.SearchProduct(keyword).pipe(
      map(data => {

        return ({ dataState: DataStateEnum.LOADED, data: data })
      }),

      startWith({ dataState: DataStateEnum.LOADING }),
      catchError(err => of({ dataState: DataStateEnum.ERROR, errorMessage: err.message }))
    )
  }
  selected(product: Product) {

    this.productsService.selectedProduct(product).subscribe(data => {
      product.selected = data.selected;
    })
  }
  OnDelete(product: Product) {
    let v = confirm("Etes vous sur?")
    if (v == true)
      this.productsService.deletedProduct(product).subscribe(data => {
        this.onGetAllProduct();
      })
  }
  onNewProduct() {

    this.router.navigateByUrl("/newProduct")
  }
  onUpdate(p: Product) {
    this.router.navigateByUrl("/editProduct/" + p.id)
  }









}
