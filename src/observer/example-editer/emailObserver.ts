import SubScriber from '../interface/subscriber';


class EmailObserver implements SubScriber {
  update(data: any) {
    console.log('EmailObserver', data)
  }
}

export default EmailObserver;