import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isActive: boolean = true;
  isArchived: boolean = false;

  menuClicked(value) {
    if (value === 'active') {
      this.isActive = true;
      this.isArchived = false;      
    } else {
      this.isActive = false;
      this.isArchived = true;    
    }
  }
}


