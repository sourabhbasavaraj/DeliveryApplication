import { Component, OnInit } from '@angular/core';
import { CustomerRatingService } from 'app/customer-rating.service';


@Component({
  selector: 'app-rate-us-comp',
  templateUrl: './rate-us-comp.component.html',
  styleUrls: ['./rate-us-comp.component.css']
})
export class RateUsCompComponent implements OnInit {

  constructor(private customerService: CustomerRatingService) { }

  ngOnInit(): void {
  }

  sendUserData(products: {reviewerName: String, orderId: Number, rating:Number, title: String, suggestions: String, review: String}){
    console.log(products);
    this.customerService.onProductCreate(products);
  }

}
