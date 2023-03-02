import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable()
export class UserService {
  activeUsers = ['active1', 'active2']
  inActiveUsers = ['inactive1', 'inactive2']

  constructor(private counterService: CounterService) {}

  setToActiveUsers(id: number) {
    this.activeUsers.push(this.inActiveUsers[id]);
    this.inActiveUsers.splice(id,1);
    this.counterService.incrementActiveToInactiveCount();
  }

  setToInactiveUsers(id: number) {
    this.inActiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.incrementInactiveToActiveCount();
  }
}
