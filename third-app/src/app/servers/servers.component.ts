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
  serverName = 'TestServer';
  serverCreated = false;

  timer = setTimeout(() => {
    this.allowNewServer = true;
  }, 2000);

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStauts =
      'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
