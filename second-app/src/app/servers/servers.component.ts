import { Component } from '@angular/core';

// $ ng generate component servers
@Component({
  // Commmon Usaage
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  allowNewServer: boolean = false;
  timer = setTimeout(() => {
    this.allowNewServer = true;
  }, 2000);
}
