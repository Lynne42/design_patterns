import SubScriber from './subscriber';

export type SubScribers = Map<string, SubScriber>;

class Publisher {
  public subScribers: SubScribers = new Map();

  subscriber(type: string, s: SubScriber) {
    this.subScribers.set(type, s);
  }

  unSubScriber(type: string, s: SubScriber) {
    this.subScribers.delete(type);
  }

  notifuSubScribers(data: any) {
    for (let subScriber of this.subScribers.values()) {
      subScriber.update(data)
    }
  }
}

export default Publisher;
