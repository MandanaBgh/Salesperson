import { Component, OnInit } from '@angular/core';
import { SalesPerson } from '../sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {



  salespersonList: SalesPerson[] = [

    new SalesPerson("Mandana", "Bagheri", "Mandana.bgh@gmail.com", 40000),
    new SalesPerson("Mehdi", "Yaghoobpour", "Mehdi@luv2Code", 10000),
    new SalesPerson("Sosan", "Korba", "Korba@yahoo.com", 4300)


  ];
  constructor() { }

  ngOnInit(): void {
  }

}
