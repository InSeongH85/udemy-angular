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
  serverCreationStauts = 'No Server was created.';

  timer = setTimeout(() => {
    this.allowNewServer = true;
  }, 2000);

  onCreateServer() {
    this.serverCreationStauts = 'Server was created!';
  }
}
