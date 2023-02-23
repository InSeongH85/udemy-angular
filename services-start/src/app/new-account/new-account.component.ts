import { Component } from "@angular/core";
import { AccountsService } from "../accounts.service";
import { LoggingService } from "../logging.services";

@Component({
  selector: "app-new-account",
  templateUrl: "./new-account.component.html",
  styleUrls: ["./new-account.component.css"],
  // providers 로 Service 를 Dependency injection
  // providers: [LoggingService],
})
export class NewAccountComponent {
  // Service Injection
  constructor(
    private loggingService: LoggingService,
    private accountsService: AccountsService
  ) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }
}
