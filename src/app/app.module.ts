import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeelistComponent } from './components/employeelist/employeelist/employeelist.component';
import { EditemployeeComponent } from './components/editemployee/editemployee/editemployee.component';
import { AddemployeeComponent } from './components/addemployee/addemployee/addemployee.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EmployeelistComponent,
    EditemployeeComponent,
    AddemployeeComponent,
    HttpClientModule
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
