import ConcreteSubject from './concreteSubject';
import ConcreteObserverA from './concreteObserverA';
import ConcreteObserverB from './concreteObserverB';

const subject = new ConcreteSubject();

const observer1 = new ConcreteObserverA();
// 注册发布者 observer1
subject.attach(observer1);

const observer2 = new ConcreteObserverB();

// 注册发布者 observer2
subject.attach(observer2);

// 业务逻辑，并 通知观察者
subject.someBusinessLogic();
subject.someBusinessLogic();

subject.detach(observer2);

subject.someBusinessLogic();

