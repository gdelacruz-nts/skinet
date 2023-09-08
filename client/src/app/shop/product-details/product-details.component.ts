import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/models/products';
import { ShopService } from '../shop.service';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
product: IProduct;

constructor(private shopService: ShopService, private activatedRoute: ActivatedRoute, private bcService: BreadcrumbService){
 this.bcService.set('@productDetails', ' ') 
}  

ngOnInit(){
  this.loadProduct();
}

loadProduct(){
  const id = +this.activatedRoute.snapshot.paramMap.get('id');
  console.log("--> " + id);
  this.shopService.getProduct(id)
    .subscribe(product => {
      this.product = product;
      this.bcService.set('@productDetails', product.name);
    }, error => {
      console.log(error);
    });
}

}