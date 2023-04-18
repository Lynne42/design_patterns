import SubScriber from '../interface/subscriber';

class EmailObserver implements SubScriber {
  type: string = '';
  constructor(type: string) {
    this.type = type;
  }
  update(data: any) {
    console.log(this.type, data);
  }
}

export default EmailObserver;
