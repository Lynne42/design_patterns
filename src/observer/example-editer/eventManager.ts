
import Publisher from '../interface/publisher';

class EventManager extends Publisher {
    constructor() {
      super();
    }

    notifuSubScribers(data: any) {
      for (let subScriber of this.subScribers.values()) {
        subScriber.update(data)
      }
    }
}


export default EventManager;