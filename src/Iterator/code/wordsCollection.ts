import type Collection from './collection';
import AlphabeticalOrderIterator from './alphabeticalOrderIterator';

export default class WordsCollection implements Collection {
  private items: string[] = [];

  constructor(data: string[]) {
    this.items = data;
  }

  public getItems(): string[] {
    return this.items;
  }

  public getCount(): number {
    return this.items.length;
  }

  public addItem(item: string): void {
    this.items.push(item);
  }

  public getIterator(): Iterator<string> {
    return new AlphabeticalOrderIterator(this);
  }

  public getReverseIterator(): Iterator<string> {
    return new AlphabeticalOrderIterator(this, true);
  }
}
