import { Pipe, PipeTransform } from '@angular/core';
import { SociosInterface } from '../models/socios-interface';

@Pipe({
  name: 'topHundredPartnerMarried'
})
export class TopHundredPartnerMarriedPipe implements PipeTransform {

  transform(value: SociosInterface[]): {nombre:string, edad:number, equipo:string}[] {
    let retorno = value.filter(socio => socio.estadoCivil == "Casado" && socio.nivelDeEstudios == "Universitario").map(socioReturn => {
        return {
          nombre: socioReturn.nombre,
          edad: socioReturn.edad,
          equipo: socioReturn.equipo
        };
    }).splice(0, 99);

    return retorno.sort((socioA, socioB) => socioA.edad - socioB.edad);
  }

}
