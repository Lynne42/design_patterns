import type Iterator from './iterator';

export default interface Gather {
  // Retrieve an external iterator.
  getIterator(): Iterator<string>;
}
