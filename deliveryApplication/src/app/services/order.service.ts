import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";

import { Observable, BehaviorSubject } from "rxjs";
import { first, catchError, tap } from "rxjs/operators";

import { User } from "../models/User";
import { Order} from "../models/Order";

import { ErrorHandlerService } from "./error-handler.service";


export class orderModify{
  public o_id!: string;
  public uId!: string;
  public orderStatus!: string;
  public pDate!: string;
  public dDate !:string;
  public sp!:string;
 }


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  o_Modify = new orderModify();
  private url = "http://localhost:3000/order";

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };



  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService,
    private router: Router) { }

    placeOrder(order:  Order): Observable<Order> {
      console.log("inside Place Order");
      return this.http
        .post<Order>(`${this.url}/placeOrder`, order, this.httpOptions)
        .pipe(
          first(),
          catchError(this.errorHandlerService.handleError<Order>("placeOrder"))
        );
    }

    viewModiy(oid:  string): Observable<orderModify[]> {
      console.log("inside Place Order");
      return this.http
        .get<orderModify[]>(`${this.url}/viewModify/${oid}` ,{ responseType: "json" })
        .pipe(
          catchError(this.errorHandlerService.handleError<orderModify[]>("fetchAll",[]))
        );;

    }

}
