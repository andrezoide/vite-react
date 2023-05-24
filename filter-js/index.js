const arrayDoido = [
  { name: 'andre', age: 21, title: 'JR', test: 45 },
  { name: 'luco', age: 76, title: 'SR', test: 12 },
  { name: 'felp', age: 51, title: 'SR', test: 2 },
  { name: 'copco', age: 23, title: 'PL', test: 54 },
]

// da pra ir encaixando varios metodos pra filtrar
const filtros = arrayDoido
  .filter((person) => person.age >= 10)
  .map((item) => item.name)
  .some((name) => name === 'andre')

  console.log(filtros)