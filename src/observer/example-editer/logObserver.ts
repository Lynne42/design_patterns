import SubScriber from '../interface/subscriber';


class LogObserver implements SubScriber {
  update(data: any) {
    console.log('LogObserver', data)
  }

}

export default LogObserver;