interface Book<T> {
  title: string;
  published: number;
  writer: string;
  serial: T;
}

export const book: Book<number> = {
  title: 'Essentialist',
  published: 2023,
  writer: 'Brock',
  serial: 2,
};

export const vehicle: Array<{id: number; name: string}> = [
  {
    id: 1,
    name: 'Doohan Aditya Saputro',
  },
  {
    id: 2,
    name: 'Aditya Saputro',
  },
  {
    id: 3,
    name: 'Saputro',
  },
];

/**
 * Primitive Type
 * 1. string
 * 2. number
 * 3. boolean
 * 4. bigint
 * 5. undefined
 * 6. symbol
 * 7. null
 * 8. object
 */

// 1. string
export let name: String = 'Bambang Sudarjo';
name = 'Sukiman'; // expected, Sukiman
// name = 6; // Expected, error

// 2. number
export let id: Number = 5;
id = 9;

// 3. boolean
export const setTrue: Boolean = true;

// 4. bigint

// eslint-disable-next-line node/no-unsupported-features/es-builtins
export const numberBig: BigInt = 100n;

//5. undefined
export const noData = undefined;

// 6. symbol
export const sym1 = Symbol('key');

// Symbols are immutable, and unique.
// let sym2 = Symbol('key');
// let sym3 = Symbol('key');

// sym2 === sym3; false, symbols are unique

// 7. null
export const nullData = null;

// 8. object
export let employee: {
  id: number;
  name: string;
  job: string;
  required?: boolean;
};

// eslint-disable-next-line prefer-const
employee = {
  id: 1,
  name: 'Sukiman',
  job: 'Software Engineering',
  required: false,
};

// Tuple Type
interface Fruit {
  id: number;
  name: string;
  city: string;
  colour: string[];
  serve?: [number, string, boolean];
}

const apple: Fruit = {
  id: 1,
  name: 'Apple',
  city: 'Bekasi',
  colour: ['green', 'red'],
  serve: [30, 'juice', true],
};

apple.serve?.push('Jakarta');
apple.serve?.push(false);

// Destructring Array with Tuple type

export const doSomething = (stringHash: [string, number]): string => {
  // destructring array
  const [inputString, hash] = stringHash;
  return `${inputString} dan ${hash}`;
};

// Tuple with question mark (?) as an optional
// Only can in at the end of array

type OrderNumber = [number, number, number?];

export const getNewOrder = (collectNumbber: OrderNumber): string => {
  return `${collectNumbber.length}`;
};

// Tuples can also have rest elements, which have to be an array/tuple type.

type BooleanNumberString = [boolean, number, ...string[]];
type BooleanStringNumber = [boolean, ...string[], number];
type StringBooleanNumber = [...string[], boolean, number];

export const arrayBooleanNumber: BooleanNumberString = [
  false,
  1,
  'Doohan',
  'Aditya',
];

export const booleanStringNumber: BooleanStringNumber = [true, 1];
export const booleanStringNumberTwo: BooleanStringNumber = [
  true,
  'Bambang',
  'Sukiman',
  2,
];

export const stringBooleanNumber: StringBooleanNumber = [
  'Bambang',
  'Sukiman',
  true,
  3,
];

// readonly tuple

// const newFunc = (paramsArray: readonly [string, string]) => {
//   paramsArray[0] = "Can't change";
//   // can't assign because it's readonly
//   return paramsArray;
// };

/***
 * Enum Type
 */

enum Role {
  ADMIN = 'ADMIN',
  USER_READ_ONLY = 'USER_READ_ONLY',
  AUTHOR = 'AUTHOR',
}

interface Person {
  name: string;
  age: number;
  hobbies?: string[];
  role: string;
}

export const checkRole = (person: Person): void => {
  switch (person.role) {
    case Role.ADMIN:
    case Role.AUTHOR:
      console.log(`Your ${person.role} is valid`);
      break;
    case Role.USER_READ_ONLY:
      console.log(`Your role is ${person.role}`);
      break;
    default:
      console.log('Your Role is invalid');
  }
};
