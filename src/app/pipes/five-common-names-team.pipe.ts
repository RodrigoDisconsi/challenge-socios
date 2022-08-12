import { Pipe, PipeTransform } from '@angular/core';
import { SociosInterface } from '../models/socios-interface';

@Pipe({
  name: 'fiveCommonNamesTeam'
})
export class FiveCommonNamesTeamPipe implements PipeTransform {

  transform(value: SociosInterface[], args: string): {name:string, cantidad:number}[] {
    let retorno:{name:string, cantidad:number}[] = []

    let filterDataByTeam = value.filter(socio => socio.equipo == args);

    filterDataByTeam.forEach(socio => {
      let existName = retorno.find(x => x.name == socio.nombre);
      if(existName){
        existName.cantidad ++;
      }
      else{
        retorno.push({
          name: socio.nombre,
          cantidad: 1
        });
      }
    });

    retorno.sort((nameA, nameB) => nameB.cantidad - nameA.cantidad);

    return retorno.splice(0, 4);
  }

}
