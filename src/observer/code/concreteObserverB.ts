import Observer from './observer';
import Subject from './subject';
import ConcreteSubject from './concreteSubject';


class ConcreteObserverB implements Observer {
  public update(subject: Subject): void {
      if (subject instanceof ConcreteSubject && (subject.state === 0 || subject.state >= 2)) {
          console.log('ConcreteObserverB: Reacted to the event.');
      }
  }
}

export default ConcreteObserverB;