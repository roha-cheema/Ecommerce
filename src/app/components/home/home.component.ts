import { Component, OnInit } from '@angular/core';
import { SuggestedProduct } from 'src/app/models/models';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 suggestedProducts:SuggestedProduct[]=[
  {
    banerimage:'Baner/Baner_Mobile.png',
    category:{
      id:0,
      category:'electornics',
      subCategory:'mobiles'
    },
  },
   {
     banerimage: 'Baner/Baner_Laptop.png',
     category: {
       id: 1,
       category: 'electornics',
       subCategory: 'laptops'
     },
   },
   {
     banerimage: 'Baner/Baner_Chair.png',
     category: {
       id: 1,
       category: 'electornics',
       subCategory: 'chairs'
     },
   },
 ];

  constructor (){}

  ngOnInit(): void {
    
  }
}
