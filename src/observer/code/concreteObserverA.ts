import Observer from './observer';
import Subject from './subject';
import ConcreteSubject from './concreteSubject';

class ConcreteObserverA implements Observer {
  public update(subject: Subject): void {
      if (subject instanceof ConcreteSubject && subject.state < 3) {
          console.log('ConcreteObserverA: Reacted to the event.');
      }
  }
}

export default ConcreteObserverA;