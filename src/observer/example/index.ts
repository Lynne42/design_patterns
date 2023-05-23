import EmailObserver from './emailObserver';
import LogObserver from './logObserver';

import Editer from './editer';
import EventManager from './eventManager';

function exampleEditer() {
  // 注册观察者
  const publish = new Editer(new EventManager());
  publish.subscriber('emailObserver', new EmailObserver('emailObserver'));
  publish.subscriber('logObserver', new LogObserver('logObserver'));

  const edit = new Editer(publish);

  edit.openFile();
  edit.editFile('编辑文件');
  edit.editFile('第一步');
  edit.saveFile();

  edit.editFile('第二步');
  edit.saveFile();
}


export default exampleEditer;