import { Component, OnInit } from '@angular/core';
import { CustomersRatingService } from 'app/customers-rating.service';

@Component({
  selector: 'app-rate-us-comp',
  templateUrl: './rate-us-comp.component.html',
  styleUrls: ['./rate-us-comp.component.css']
})
export class RateUsCompComponent implements OnInit {

  constructor(private service: CustomersRatingService) { }

  ngOnInit(): void {
    this.getDataFromAPI();
  }


  getDataFromAPI(){
    this.service.getData().subscribe((res: any)=>{
      console.log(res);
    }, (err)=>{
      console.log(err)
    })
  }
}
