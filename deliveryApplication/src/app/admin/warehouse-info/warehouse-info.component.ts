import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warehouse-info',
  templateUrl: './warehouse-info.component.html',
  styleUrls: ['./warehouse-info.component.css']
})
export class WarehouseInfoComponent implements OnInit {


  status =''
  wearhouse =''
  oid = ''
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form :any){
    
  }
}
