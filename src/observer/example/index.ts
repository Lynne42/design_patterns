import EmailObserver from './emailObserver';
import LogObserver from './logObserver';

import Publisher from '../interface/publisher';

import Editer from './editer';

function exampleEditer() {
  // 注册观察者
  const publish = new Publisher();
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