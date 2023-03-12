import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  showNav: boolean = false;

  toggleNav() {
    this.showNav = !this.showNav;
    console.log(this.showNav);
  }
}
