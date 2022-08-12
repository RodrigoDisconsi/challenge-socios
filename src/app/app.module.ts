import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { TableComponent } from './componentes/table/table.component';

import { FileUploadModule } from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import { CardModule } from 'primeng/card';
import { FileComponent } from './componentes/file/file.component';
import { SociosPromEdadPerClubPipe } from './pipes/socios-prom-edad-per-club.pipe';
import { FiveCommonNamesTeamPipe } from './pipes/five-common-names-team.pipe';
import { TopHundredPartnerMarriedPipe } from './pipes/top-hundred-partner-married.pipe';
import { TableTopHundredMarriedPartnersComponent } from './componentes/table-top-hundred-married-partners/table-top-hundred-married-partners.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FileComponent,
    TableComponent,
    FiveCommonNamesTeamPipe,
    SociosPromEdadPerClubPipe,
    TopHundredPartnerMarriedPipe,
    TableTopHundredMarriedPartnersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FileUploadModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
