import { HelloComponent } from './hello/hello.component';
import { GoodbyComponent } from './goodby/goodby.component';
import { AlertDangerComponent } from './alert-danger/alert-danger.component';
import { AlertSuccessComponent } from './alert-success/alert-success.component';
import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { HiComponent } from './hi/hi.component';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <ng-container *ngComponentOutlet="component"></ng-container>
  <input type="Submit" value="Switch Component" (click)="SwitchComponent()"/>
  <hr/><hr/>
  <!-- <app-employee></app-employee> -->
  <app-employees></app-employees>
  <hr/><hr/>

  <ng-container *ngComponentOutlet="say"></ng-container>
  <input type="button" value="Hi" (click)="Hi()" />&nbsp;
  <input type="button" value="Hello" (click)="Hello()" />&nbsp;
  <input type="button" value="Goodby" (click)="GoodBy()" />&nbsp;
  <hr/><hr/>
  <app-life-cycle></app-life-cycle>
  <hr><hr>
  {{title}}
  <hr><hr>
  Resukt is Result(1+2)+5 is {{ Add(1,2)}}
  <br>

  <input type="button" value="Toggole" (click)="Toggle()" />

  <div *ngIf="show then ifPart else elsePart">Hellow Show</div>

  <ng-template #ifPart>
    <div>This is if Part</div>
  </ng-template>

  <ng-template #elsePart>
    <div>This is Else Part</div>
  </ng-template>

    <hr/><hr/>

    <div *ngFor="let car of Cars; let i = index" [ngSwitch]="car.color">
      <div *ngSwitchCase="'blue'"
          class="blue">
        {{i+1}}. {{ car.name }} ({{ car.color }})
      </div>
      <div *ngSwitchCase="'yellow'"
          class="yellow">
          {{i+1}}. {{ car.name }} ({{ car.color }})
      </div>
      <div *ngSwitchCase="'silver'"
          class="silver">
          {{i+1}}. {{ car.name }} ({{ car.color }})
      </div>
      <div *ngSwitchCase="'red'"
          class="red">
          {{i+1}}. {{ car.name }} ({{ car.color }})
      </div>
      <div *ngSwitchDefault
          class="text-warning">
          {{i+1}}. {{ car.name }} ({{ car.color }})
      </div>
    </div>
    <hr/><hr/>
    <select [(ngModel)]="selectedSubject">
      <option>Select....</option>
      <option *ngFor="let car of Cars; let i = index" value="{{car.age}}">{{car.name}}</option>
    </select>



  `,
  // styleUrls: ['./app.component.css']
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Md. Habibur Rahman';
  Add(a:number, b:number):Number{
    return a+b+5;
  }

  show = true;
  Toggle(){
    if(this.show){
      this.show = false;
    }else{
      this.show = true;
    }
  }


  Cars: any[] = [
    {
      "name": "BMW",
      "age": 12,
      "color": 'blue'
    },
    {
      "name": "Ford",
      "age": 15,
      "color": 'yellow'
    },
    {
      "name": "Suzuki",
      "age": 18,
      "color": 'silver'
    },
    {
      "name": "MG Hector",
      "age": 14,
      "color": 'red'
    },
    {
      "name": "Jaguar",
      "age": 8,
      "color": 'green'
    }
  ]
  selectedSubject = 18

  component = AlertSuccessComponent
  SwitchComponent(){
    if(this.component == AlertSuccessComponent){
      this.component = AlertDangerComponent
    }
    else{
      this.component = AlertSuccessComponent
    }
  }

  say:any = HiComponent

  Hi(){
    this.say=HiComponent
  }
  Hello(){
    this.say=HelloComponent
  }
  GoodBy(){
    this.say=GoodbyComponent
  }
}
