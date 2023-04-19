import WordsCollection from './wordsCollection';

const data: string[] = ['a', 'b', 'c', 'd'];

function main() {
  const wordsCollection = new WordsCollection(data);
  const iterator = wordsCollection.getIterator();
  const reserveIterator = wordsCollection.getReverseIterator();

  while(iterator.valid()) {
    console.log(1, iterator.next())
  }

  while(reserveIterator.valid()) {
    console.log(2, reserveIterator.next())
  }

}

main()