import { Component, OnInit } from '@angular/core';
import { CustomersRatingService } from 'app/customers-rating.service';
import {Chart} from 'chart.js/auto';

@Component({
  selector: 'app-inventory-info-show',
  templateUrl: './inventory-info-show.component.html',
  styleUrls: ['./inventory-info-show.component.css']
})
export class InventoryInfoShowComponent implements OnInit {
  oStatus1: any;

  result : any[] = [];

  constructor(private service: CustomersRatingService) { }


   ngOnInit(): void {
    this.getWarehouseData();

    console.log("fetched the wear house data");
    console.log(this.result);
    //this.fetchorder(4);
    // this.insideorder('inside')
    // this.deliveredorder('delivered')
    
  }

 


  fetchlist:Array<{o_id: string, oStatus: number}> = []

  inlist:Array<{o_id: string, oStatus: number}> = []

  dellist:Array<{o_id: string, oStatus: number}> = []

  graphdata:Array<{status: string, count: number}> = []

  graphlist(){

    console.log("inside graph list"); 
    console.log("asdasd", this.result); 
    
    console.log("asdasd", this.result.length); 

    let fetching :number= 0
    let inside :number= 0
    let delivered:number = 0

    for(let i =0; i< this.result.length; i++){

      console.log("listing the item ",this.result[i]);

      if(this.result[i].oStatus == 2){
        fetching = fetching + 1;
      }
      if(this.result[i].oStatus == 3){
        inside = inside + 1;
      }
      if(this.result[i].oStatus == 4){
        delivered = delivered + 1
      }
    };
    this.graphdata.push({status: 'PickedUp', count: fetching});

    console.log(fetching);

    this.graphdata.push({status: 'At From Wearhouse', count: inside})
    this.graphdata.push({status: 'At To Wearhouse', count: delivered})
  }

  // fetchorder(item: number){
  //   console.log(item)
  //   console.log(this.orderlist)
  //   console.log(this.orderlist.length)
  //   for (var ite of this.orderlist){
  //     console.log(ite)
  //     // console.log(ite.o_id)
  //     if (ite.oStatus == item){
  //       // console.log(ite.o_id)
  //       this.fetchlist.push(ite)
  //     }
  //   }
  //   // console.log(this.fetchlist)
  // }

  // insideorder(item: string){
  //   console.log(item)
  //   for (var ite of this.result){
  //     console.log(item.ordeid)
  //     if (ite.status == item){
  //       console.log(item.orderid)
  //       this.inlist.push(item)
  //     }
  //   }
  //   console.log(this.inlist)
  // }

  // deliveredorder(item: string){
  //   console.log(item)
  //   for (var ite of this.orderlist){
  //     console.log(ite.orderid)
  //     if (ite.status == item){
  //       console.log(ite.orderid)
  //       this.dellist.push(ite)
  //     }
  //   }
  //   console.log(this.dellist)
  // }

  getWarehouseData(){
    this.service.getWarehouse1Data().subscribe((res: any)=>{
       console.log(res);

      var n:number = res.length;

      for(let i=0;i<n;i++){

        this.result.push(res[i]);


        if(res[i].oStatus == 2){
          this.fetchlist.push(res[i])
        }

        if(res[i].oStatus == 3){
          this.inlist.push(res[i])
        }

        if(res[i].oStatus == 4){
          this.dellist.push(res[i])
        }

      }

      this.graphlist()
    // console.log(this.graphdata)
  
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






       
      

    })
  };

}
