import { Component, OnInit } from '@angular/core';
import { SociosInterface } from 'src/app/models/socios-interface';
import { SociosPromEdadPerClubPipe } from 'src/app/pipes/socios-prom-edad-per-club.pipe';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  socios!:SociosInterface[] | null;
  equipos!:string[];

  constructor(private fileService:FileService) { }

  ngOnInit(): void {
    this.fileService.socios.subscribe(data => {
      if(data.length > 0){
        this.socios = data;
        this.equipos = [...new Set(this.socios.map(socio => socio.equipo))];
      }
      else
        this.socios = null;
    });
  }

}
