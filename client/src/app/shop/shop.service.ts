import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPagination } from '../models/pagination';
import { IBrand } from '../models/brand';
import { IType } from '../models/productType';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'https://localhost:5001/api/'
  constructor(private http: HttpClient) { }

getProducts() {
  return this.http.get<IPagination>(this.baseUrl + 'products?pageSize=50');
}

getBrands() {
  return this.http.get<IBrand[]>(this.baseUrl + 'products/brands');
}

getTypes() {
  return this.http.get<IType[]>(this.baseUrl + 'products/types');
}

}
