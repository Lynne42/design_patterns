import SubScriber from './subscriber';

export type SubScribers = SubScriber[];


class Publisher {
  public subScribers: SubScribers = [];

  subscriber(s: SubScriber) {
    this.subScribers.push(s);
  }

  unSubScriber(s: SubScriber) {

  }

  notifuSubScribers(data: any) {
    this.subScribers.forEach((subScribers: SubScriber) => {
      subScribers.update(data);
    })
  }

}

export default Publisher;