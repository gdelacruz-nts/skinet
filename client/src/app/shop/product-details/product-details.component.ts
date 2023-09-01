import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/models/products';
import { ShopService } from '../shop.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
product: IProduct;

constructor(private shopService: ShopService, private activateRoute: ActivatedRoute){}  

ngOnInit(){
  this.loadProduct();
}

loadProduct(){
  this.shopService.getProduct(2).subscribe(product => {
    this.product = product;
  }, error => {
    console.log(error);
  });
}
}