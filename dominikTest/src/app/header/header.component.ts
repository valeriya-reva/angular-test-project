import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../../assets/scss/style.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isnavActive = false;
  
  clickMenu() {
    if (this.isnavActive) {
      this.isnavActive = false;
    } else {
        this.isnavActive = true;
    }
  }
}
