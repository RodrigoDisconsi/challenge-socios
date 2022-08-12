import { Component, OnInit, ViewChild } from '@angular/core';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {

  file:any;

  @ViewChild('file', {static: false}) inputFile: any;

  constructor(private fileService:FileService) { 
  }

  ngOnInit(): void {
  }

  parseData(){
    this.fileService.parseFileCsv(this.file);
  }

  clearData(){
    this.inputFile.clear();
    this.fileService.socios.next([]);
  }

  onUpload(event:any) {
    this.file = event.files[0];
  }

}
