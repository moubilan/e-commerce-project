import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getData(){
    return this.httpClient.get('http://ecommerce.test/api/products')
  }

  getByIdData(id:any){
    return this.httpClient.get('http://ecommerce.test/api/product/'+id)
  }
}
