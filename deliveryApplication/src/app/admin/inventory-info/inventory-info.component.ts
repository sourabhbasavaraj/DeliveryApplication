import { Component, OnInit } from '@angular/core';
import { CustomersRatingService } from 'app/customers-rating.service';

@Component({
  selector: 'app-inventory-info',
  templateUrl: './inventory-info.component.html',
  styleUrls: ['./inventory-info.component.css']
})
export class InventoryInfoComponent implements OnInit {

  constructor(private service: CustomersRatingService) { }

  ngOnInit(): void {
    this.getWarehouseData();
  }

  getWarehouseData(){
    this.service.getWarehouse1Data().subscribe((res: any)=>{
      console.log(res);
    })
  };


}
