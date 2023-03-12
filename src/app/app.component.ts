import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dananz';
  showLoader: boolean = true;

  ngOnInit() {
    setTimeout(() => {
      this.showLoader = false;
    }, 1000);
  }
}
