import Publisher from '../interface/publisher';

class Editer {
  pulisher: Publisher;
  content: string = '';

  constructor(pulisher: Publisher) {
    this.pulisher = pulisher;
  }

  editFile(content: string) {
    console.log('edit', content);
    this.content += content;
  }

  openFile() {
    console.log('open file');
  }

  saveFile() {
    console.log('save file', this.content);
    this.pulisher.notifuSubScribers(this.content);
  }
}

export default Editer;
