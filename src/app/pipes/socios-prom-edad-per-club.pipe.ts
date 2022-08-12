import { Pipe, PipeTransform } from '@angular/core';
import { DatosSocioEquipo } from '../models/datos-socio-equipo';
import { SociosInterface } from '../models/socios-interface';

@Pipe({
  name: 'sociosPromEdadPerClub'
})
export class SociosPromEdadPerClubPipe implements PipeTransform {

  transform(value: SociosInterface[], args: string[]): DatosSocioEquipo[] {
    let datosPorEquipo:DatosSocioEquipo[] = [];

    args.forEach((equipo:string) => {
      let sociosFilterTeam = value.filter(socio => socio.equipo == equipo);
    
      let promedioEdadEquipo = {
        equipo: equipo,
        promedioEdad: 0,
        edadMin: 0,
        edadMax: 0,
        cantidadSocios:0
      };
      
      let edadMax = sociosFilterTeam[0].edad;
      let edadMin = sociosFilterTeam[0].edad;
      let cantidadSocios = sociosFilterTeam.length;
      
      let sumatoria = sociosFilterTeam.reduce(function(acumulador, siguienteValor){
        if(siguienteValor.edad > edadMax){
          edadMax = siguienteValor.edad
        }
        if(siguienteValor.edad < edadMin){
          edadMin = siguienteValor.edad;
        }
        return acumulador + siguienteValor.edad;
      }, 0);

      promedioEdadEquipo.promedioEdad = Math.trunc(sumatoria / cantidadSocios);
      promedioEdadEquipo.edadMax = edadMax;
      promedioEdadEquipo.edadMin = edadMin;
      promedioEdadEquipo.cantidadSocios = cantidadSocios;

      datosPorEquipo.push(promedioEdadEquipo);
    });

    return datosPorEquipo;
  }

}
