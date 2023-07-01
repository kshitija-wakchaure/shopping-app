import { EventEmitter } from "@angular/core";
import { Product } from "../model/product.model";
import { BehaviorSubject, Subject } from "rxjs";

export class ProductService{
    productDataList: Product[] = [
        new Product('Watch', 'https://www.shutterstock.com/image-photo/luxury-watch-isolated-on-white-260nw-1528296152.jpg', '5,000'),
        new Product('Watch', 'https://www.shutterstock.com/image-photo/luxury-watch-isolated-on-white-260nw-1528296152.jpg', '5,000'),
        new Product('Watch', 'https://www.shutterstock.com/image-photo/luxury-watch-isolated-on-white-260nw-1528296152.jpg', '5,000')
    ];
    shoppingBag: any[] = [];

    productListObs = new Subject();
    shoppingBagObs = new Subject();

    getProductList(){
        return this.productDataList.slice();
    }

    addNewProduct(newProd : any){
        this.productDataList.push(newProd);
        console.log(this.getProductList);
        this.productListObs.next(this.productDataList.slice())
    }

    addNewProductToBag(newItem : any){
        this.shoppingBag.push(newItem);
        console.log(this.shoppingBag);
        this.shoppingBagObs.next(this.shoppingBag)
    }

}