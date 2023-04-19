import type Iterator from './iterator';

export default interface Collection {
  // Retrieve an external iterator.
  getIterator(): Iterator<string>;
}
