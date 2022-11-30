import { Component, OnInit } from '@angular/core';
import { CustomersRatingService } from 'app/customers-rating.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  stringifiedData: any;
  parsedJson: any;
  usersReview: any;
  reviewId1: any;
  reviewTitle1: any;
  reviewSuggestions1: any;
  review1: any;
  reviewName1: any;
  reviewId2: any;
  reviewName2: any;
  review2: any;
  reviewSuggestions2: any;
  reviewTitle2: any;
  reviewId3: any;
  reviewName3: any;
  review3: any;
  reviewSuggestions3: any;
  reviewTitle3: any;
  reviewId4: any;
  reviewName4: any;
  review4: any;
  reviewSuggestions4: any;
  reviewTitle4: any;

  constructor(private service: CustomersRatingService) { }

  ngOnInit(): void {
    this.getDataFromAPI();
  }


  getDataFromAPI(){
    this.service.getData().subscribe((res: any)=>{
      console.log(res);

      //Review 1
      this.reviewId1 = res[0].id;
      this.reviewName1 = res[0].reviewerName;
      this.review1= res[0].review;
      this.reviewSuggestions1 = res[0].suggestions;
      this.reviewTitle1  = res[0].title;

      //Review 2
      this.reviewId2 = res[1].id;
      this.reviewName2 = res[1].reviewerName;
      this.review2= res[1].review;
      this.reviewSuggestions2 = res[1].suggestions;
      this.reviewTitle2  = res[1].title;

      //Review 3
      this.reviewId3 = res[2].id;
      this.reviewName3 = res[2].reviewerName;
      this.review3 = res[2].review;
      this.reviewSuggestions3 = res[2].suggestions;
      this.reviewTitle3  = res[2].title;

      //Review 4
      this.reviewId4 = res[4].id;
      this.reviewName4 = res[4].reviewerName;
      this.review4 = res[4].review;
      this.reviewSuggestions4 = res[4].suggestions;
      this.reviewTitle4 = res[4].title;
      
    }, (err)=>{
      console.log(err)
    })
  }
  reviewName(reviewName: any) {
    throw new Error('Method not implemented.');
  }
  review(review: any) {
    throw new Error('Method not implemented.');
  }
  reviewSuggestions(reviewSuggestions: any) {
    throw new Error('Method not implemented.');
  }
  reviewTitle(reviewTitle: any) {
    throw new Error('Method not implemented.');
  }





//  change_myselect(sel) {
//   const dbParam = JSON.stringify({table:sel,limit:20});
//   const xmlhttp = new XMLHttpRequest();
//   xmlhttp.onload = function() {
//     const myObj = JSON.parse(this.responseText);
//     let text = "<table border='1'>"
//     for (let x in myObj) {
//       text += "<tr><td>" + myObj[x].name + "</td></tr>";
//     }
//     text += "</table>"
//     document.getElementById("demo").innerHTML = text;
//   }
//   xmlhttp.open("POST", "json_demo_html_table.php");
//   xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//   xmlhttp.send("x=" + dbParam);
// }



}
