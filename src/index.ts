import person2 from './person';
import {findSong} from './song';
import {
  book,
  vehicle,
  numberBig,
  employee,
  sym1,
  doSomething,
  getNewOrder,
  arrayBooleanNumber,
} from './utils/data';

const longString =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut aliquet diam.';

const trailing = 'Semicolon';

const why = 'am I tabbed?';

console.log(longString);
console.log(trailing);
console.log(why);

export function doSomeStuff(
  withThis: string,
  andThat: string,
  andThose: string[]
) {
  //function on one line
  if (!andThose.length) {
    return false;
  }
  console.log(withThis);
  console.log(andThat);
  console.dir(andThose);
  return;
}

console.log(person2);
console.log(findSong?.song);
console.log(book?.serial);
vehicle[0].name = 'Bambang';
console.log(vehicle[0].name);
console.log(typeof numberBig);
console.log(employee);
console.log(sym1);
console.log(doSomething(['Test Tuple in Function', 1]));
console.log(getNewOrder([1, 2]));
console.log(arrayBooleanNumber.length);
