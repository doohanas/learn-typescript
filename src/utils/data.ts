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

console.log(employee);
