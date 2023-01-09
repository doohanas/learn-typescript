interface person {
  name: string;
  age: number;
}

const addID = <p extends person>(obj: p) => {
  const id = Math.floor(Math.random() * 1000);
  return {...obj, id};
};
const person2 = addID({name: 'bambang', age: 50});
export default person2;
