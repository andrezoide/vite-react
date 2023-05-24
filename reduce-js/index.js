const array = [
  { name: 'Pereeira', age: 35, title: 'JR', test: 291 },
  { name: 'fsefg', age: 98, title: 'JR', test: 131 },
  { name: 'vxcv', age: 25, title: 'SR', test: 216 },
  { name: 'asda', age: 13, title: 'SR', test: 577 },
]

// exemplo arcaico:

let sumTest = 0;
for (x = 0; x < array.length; x++) {
  sumTest += array[x].test
}
// console.log(sumTest);
//outro exxemplo um pouco menos arcaico

let sumTest2 = 0;
array.forEach((item) => {
  sumTest2 += item.test
});
// console.log(sumTest2);

//exemplo legal com reduce

const sumTest3 = array.reduce((acc, item) => {
  return acc + item.test;
}, 0)
// console.log(sumTest3);

//somando duas coisas de dentro do array:

const reducerDoAndrezoide = array.reduce((acc, item) => {
  const lesserAge = acc.lesserAge < item.age ? acc.lesserAge : item.age
  const higherAge = acc.lesserAge < item.age ? acc.lesserAge : item.age
  const sumTest = acc.sumTest + item.test
  return { lesserAge, higherAge, sumTest }
},
  {
    sumTest: 0,
    lesserAge: undefined,
    higherAge: undefined,
  })

// console.log(reducerDoAndrezoide)

//outro exmploe

const howManyTitles = array.reduce((acc, item) => {
  if (acc[item.title] == null) {
    acc[item.title] = 1
  } else {
    ++acc[item.title]
  }
  return acc
}, {})
// console.log(howManyTitles);

const peoplePerAge = array.reduce((acc, item) => {
  const age = item.age
  if (acc[age] == null) acc[age] = []
  acc[age].push(item.name)

  return acc
}, {})

// console.log(peoplePerAge)