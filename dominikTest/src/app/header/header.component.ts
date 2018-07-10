import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../../assets/scss/style.scss'],
  outputs: [menuClick]
})

export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  menuClick = new EventEmitter();

  isnavActive = false;
  
  clickMenu() {
    if (this.isnavActive) {
      this.isnavActive = false;
    } else {
        this.isnavActive = true;
    }
  }
}
