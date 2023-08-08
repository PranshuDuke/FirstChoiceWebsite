import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  flag = true;
  toAbout(){
    this.flag=true;
    document.getElementById("about")?.scrollIntoView();

  }
  toCase(){
    this.flag=true;
    document.getElementById("card")?.scrollIntoView();

  }
  banner(){
    this.flag=true;
    document.getElementById("banner")?.scrollIntoView();

  }
  Reach(){
    this.flag=false;
    document.getElementById("reach-us")?.scrollIntoView();
  }

}
