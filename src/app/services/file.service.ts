import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SociosInterface } from '../models/socios-interface';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  socios:BehaviorSubject<SociosInterface[]> = new BehaviorSubject<SociosInterface[]>([]);

  constructor() { }

  parseFileCsv(file:any){
    let reader = new FileReader();
      reader.readAsText(file);

      reader.onload = () => {
        let csvData = reader.result;
        if(csvData){
          let csvRecordsArray = (csvData.toString()).split(/\r\n|\n/);

          // let headersRow = this.getHeaderArray(csvRecordsArray);
  
          this.socios.next(this.getDataRecordsArrayFromCSVFile(csvRecordsArray, 5));
        }

      };
  }

  private getDataRecordsArrayFromCSVFile(csvRecordsArray: string[], headerLength: number) {
    let csvArr:SociosInterface[] = [];

    for (let i = 0; i < csvRecordsArray.length; i++) {
      let curruntRecord = (csvRecordsArray[i]).split(';');
      if (curruntRecord.length == headerLength) {
        let socioRecord: SociosInterface = {
          nombre: curruntRecord[0].trim(),
          edad: Number.parseInt(curruntRecord[1].trim()),
          equipo: curruntRecord[2].trim(),
          estadoCivil: curruntRecord[3].trim(),
          nivelDeEstudios: curruntRecord[4].trim()
        };
        csvArr.push(socioRecord);
      }
    }
    return csvArr;
  }

  //private getHeaderArray(csvRecordsArr: any) {
  //   let headers = (csvRecordsArr[0]).split(';');
  //   let headerArray = [];
  //   for (let j = 0; j < headers.length; j++) {
  //     headerArray.push(headers[j]);
  //   }
  //   return headerArray;
  // }
}
