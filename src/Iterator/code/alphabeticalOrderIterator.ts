import type Iterator from './iterator';
import type WordsCollection from './wordsCollection';

export default class AlphabeticalOrderIterator implements Iterator<string> {
  private collection: WordsCollection;

  /**
   * 存储当前遍历器的位置. An iterator may have a lot of
   * other fields for storing iteration state, especially when it is supposed
   * to work with a particular kind of collection.
   */
  private position: number = 0;

  /**
   * 表示遍历的方向
   */
  private reverse: boolean = false;

  constructor(collection: WordsCollection, reverse: boolean = false) {
    this.collection = collection;
    this.reverse = reverse;

    if (reverse) {
      // 如果是逆向遍历， 当前位置指向的是集合的最后一个元素的位置
      this.position = collection.getCount() - 1;
    }
  }

  /**
   * 回退， 回退当前遍历位置到初始位置
   * 如果是正向遍历，则回到0的位置
   * 如果是逆向遍历，则回到集合最后一个元素的位置
   **/
  public rewind() {
    this.position = this.reverse ? this.collection.getCount() - 1 : 0;
  }

  /**
   * 获取当前遍历到的元素值
   **/
  public current(): string {
    return this.collection.getItems()[this.position];
  }

  /**
   * 获取当前遍历到的元素位置
   **/
  public key(): number {
    return this.position;
  }

  /**
   * 获取当前遍历到的元素，并移动下标到下一个元素
   **/
  public next(): string {
    const item = this.collection.getItems()[this.position];
    this.position += this.reverse ? -1 : 1;
    return item;
  }

  /**
   * 判断遍历是否已经完成
   **/
  public valid(): boolean {
    if (this.reverse) {
      return this.position >= 0;
    }
    return this.position < this.collection.getCount();
  }
}
