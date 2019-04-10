import { Component,OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'personal-profile';
  constructor(public update : SwUpdate){

  }
  ngOnInit(){
    this.update.available.subscribe(event=>{
      this.update.activateUpdate().then(() => document.location.reload());
    });
  }
}
