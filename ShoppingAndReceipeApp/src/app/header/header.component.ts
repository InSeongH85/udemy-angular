import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  collapsed = true;
  @Output() menuEmit = new EventEmitter<string>();
  isRecipesMenu: boolean = true;
  goRecipes() {
    this.menuEmit.emit('recipes');
  }

  goShoppingList() {
    this.menuEmit.emit('shoppingList');
  }
}
