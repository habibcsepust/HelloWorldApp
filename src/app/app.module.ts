import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { AlertSuccessComponent } from './alert-success/alert-success.component';
import { AlertDangerComponent } from './alert-danger/alert-danger.component';


@NgModule({
  declarations: [
    AppComponent,
    LifeCycleComponent,
    AlertSuccessComponent,
    AlertDangerComponent,
  ],
  entryComponents:[
    AlertSuccessComponent,AlertDangerComponent
  ]
  ,
  imports: [
    BrowserModule,FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
