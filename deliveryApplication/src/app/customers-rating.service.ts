import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl0 = 'http://127.0.0.1:3000/fetch';
@Injectable({
  providedIn: 'root'
})
export class CustomersRatingService {

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get(baseUrl0);
  }
  
  onProductCreate(productObj:any){
    // console.log(products);
    this.http.post('http://127.0.0.1:3000/post', productObj).subscribe((res: any)=>{
      console.log(res);
    })
  }
}
