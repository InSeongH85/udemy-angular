import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ShoppingAndReceipeApp';
  showMenuName: string = 'recipes';
  onMenuClick(menuName: string) {
    this.showMenuName = menuName;
  }
}
