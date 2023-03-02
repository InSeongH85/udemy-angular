export class CounterService {
  activeToInactiveCounter: number = 0;
  inactiveToActiveCounter: number = 0;

  incrementActiveToInactiveCount() {
    this.activeToInactiveCounter++;
    console.log('activeToInactiveCounter = ' + this.activeToInactiveCounter);
  }

  incrementInactiveToActiveCount() {
    this.inactiveToActiveCounter++;
    console.log('inactiveToActiveCounter = ' + this.inactiveToActiveCounter);
  }
}
