import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  displayMobileMenu:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  handleMobileMenu():void {
    this.displayMobileMenu = !this.displayMobileMenu;
  }

}
