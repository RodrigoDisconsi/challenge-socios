import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-top-hundred-married-partners',
  templateUrl: './table-top-hundred-married-partners.component.html',
  styleUrls: ['./table-top-hundred-married-partners.component.scss']
})
export class TableTopHundredMarriedPartnersComponent implements OnInit {

  @Input() data!:{nombre:string, edad:number, equipo:string}[];

  constructor() { }

  ngOnInit(): void {
  }

}
