import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/models/models';

@Component({
  selector: 'app-suggested-products',
  templateUrl: './suggested-products.component.html',
  styleUrls: ['./suggested-products.component.css']
})
export class SuggestedProductsComponent implements OnInit{
  @Input() catagory:Category={
    id:0,
    category:"",
    subCategory:'',
  }
 
  @Input() count:number=3;
constructor(){}

ngOnInit(): void {
  
}
}
