import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Product } from "../model/product.model";

@Injectable({ providedIn: "root" })
export class ProductService {

    constructor(private http: HttpClient) {

    }

    getAllProduct(): Observable<Product[]> {
        let host = environment.host;
        return this.http.get<Product[]>(host + "/products");

    }

    getSelectedProduct(): Observable<Product[]> {
        let host = environment.host;
        return this.http.get<Product[]>(host + "/products?selected=true");

    }
    getAvailableProduct(): Observable<Product[]> {
        let host = environment.host;
        return this.http.get<Product[]>(host + "/products?available=true");

    }
    SearchProduct(keyword: string): Observable<Product[]> {
        let host = environment.host;
        //  console.log(keyword);
        return this.http.get<Product[]>(host + "/products?name_like=" + keyword);
    }

    selectedProduct(product: Product): Observable<Product> {
        let host = environment.host;
        product.selected = !product.selected;
        return this.http.put<Product>(host + "/products/" + product.id, product);
    }
    deletedProduct(product: Product): Observable<void> {
        let host = environment.host;

        return this.http.delete<void>(host + "/products/" + product.id);
    }
    saveProduct(product: Product): Observable<Product> {
        let host = environment.host;

        return this.http.post<Product>(host + "/products", product);
    }
    updateProduct(product: Product): Observable<Product> {
        let host = environment.host;

        return this.http.put<Product>(host + "/products/" + product.id, product);
    }
    getProduct(id: number | null): Observable<Product> {
        let host = environment.host;
        return this.http.get<Product>(host + "/products/" + id);

    }
}