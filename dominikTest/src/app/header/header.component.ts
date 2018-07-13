import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isnavActive = false;
  
    onChanged(){
        this.isnavActive = !this.isnavActive;
    }
}
