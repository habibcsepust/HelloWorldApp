import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { AlertSuccessComponent } from './alert-success/alert-success.component';
import { AlertDangerComponent } from './alert-danger/alert-danger.component';
import { HiComponent } from './hi/hi.component';
import { HelloComponent } from './hello/hello.component';
import { GoodbyComponent } from './goodby/goodby.component';
import { EmployeeComponent } from './employee/employee.component';


@NgModule({
  declarations: [
    AppComponent,
    LifeCycleComponent,
    AlertSuccessComponent,
    AlertDangerComponent,
    HiComponent,
    HelloComponent,
    GoodbyComponent,
    EmployeeComponent,
  ],

  // Dynamic Component Load er jonno lage
  entryComponents:[
    AlertSuccessComponent,
    AlertDangerComponent,
    HiComponent,
    HelloComponent,
    GoodbyComponent
  ],
  imports: [
    BrowserModule,FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
