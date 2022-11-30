import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js/auto';

@Component({
  selector: 'app-inventory-info-show',
  templateUrl: './inventory-info-show.component.html',
  styleUrls: ['./inventory-info-show.component.css']
})
export class InventoryInfoShowComponent implements OnInit {

  ngOnInit(): void {
    this.fetchorder('fetching')
    this.insideorder('inside')
    this.deliveredorder('delivered')

    const data = [
      { year: 2010, count: 10 },
      { year: 2011, count: 20 },
      { year: 2012, count: 15 },
      { year: 2013, count: 25 },
      { year: 2014, count: 22 },
      { year: 2015, count: 30 },
      { year: 2016, count: 28 }
    ];

    this.graphlist()
    console.log(this.graphdata)
  
    new Chart(
      "myChart",
      {
        type: 'bar',
        data: {
          labels: this.graphdata.map(row => row.status),
          datasets: [
            {
              label: 'Numer of packages',
              data: this.graphdata.map(row => row.count)
            }
          ]
        }
      }
    );
  }

  orderlist:Array<{orderid: string, status: string}> = [
      {orderid:'123', status:'fetching'},
      {orderid:'456', status:'inside'},
      {orderid:'789', status:'delivered'},
      {orderid:'646', status:'fetching'},
      {orderid:'486', status:'delivered'},
      {orderid:'648', status:'delivered'},
      {orderid:'211', status:'inside'},
      {orderid:'865', status:'inside'},
      {orderid:'655', status:'delivered'},
      {orderid:'468', status:'delivered'},
      {orderid:'218', status:'inside'}
    ]
  fetchlist:Array<{orderid: string, status: string}> = []
  inlist:Array<{orderid: string, status: string}> = []
  dellist:Array<{orderid: string, status: string}> = []
  graphdata:Array<{status: string, count: number}> = []

  graphlist(){
    let fetching = 0
    let inside = 0
    let delivered = 0
    for (var item of this.orderlist){
      if(item.status == 'fetching'){
        fetching = fetching + 1
      }
      if(item.status == 'inside'){
        inside = inside + 1
      }
      if(item.status == 'delivered'){
        delivered = delivered + 1
      }
    }
    this.graphdata.push({status: 'fetching', count: fetching})
    this.graphdata.push({status: 'inside', count: inside})
    this.graphdata.push({status: 'delivered', count: delivered})
  }

  fetchorder(item: string){
    console.log(item)
    for (var ite of this.orderlist){
      console.log(ite.orderid)
      if (ite.status == item){
        console.log(ite.orderid)
        this.fetchlist.push(ite)
      }
    }
    console.log(this.fetchlist)
  }

  insideorder(item: string){
    console.log(item)
    for (var ite of this.orderlist){
      console.log(ite.orderid)
      if (ite.status == item){
        console.log(ite.orderid)
        this.inlist.push(ite)
      }
    }
    console.log(this.inlist)
  }

  deliveredorder(item: string){
    console.log(item)
    for (var ite of this.orderlist){
      console.log(ite.orderid)
      if (ite.status == item){
        console.log(ite.orderid)
        this.dellist.push(ite)
      }
    }
    console.log(this.dellist)
  }

}
