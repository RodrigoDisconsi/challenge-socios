import { Component, Input, OnInit } from '@angular/core';
import { DatosSocioEquipo } from 'src/app/models/datos-socio-equipo';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() data!:DatosSocioEquipo[];

  constructor() { }

  ngOnInit(): void {
    this.data.sort((socioA, socioB) => socioB.cantidadSocios - socioA.cantidadSocios);
  }

}
