import { Component, OnInit ,OnChanges, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit,OnChanges,OnDestroy {

  title = "Habibur Rahman";

  constructor() {
    console.log("constructor fired");
   }

   ngOnChanges(){
    console.log("Onchanges fired.");
   }

   ngOnDestroy(){
    console.log("ngOnDestroy fired.");
   }

  ngOnInit() {
    console.log("ngOnInit fired.");
  }

}
