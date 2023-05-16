import { useState } from 'react';
import Modal from './Modal';
import './App.css';

const users = [
  {
    id: 1,
    name: "andre",
    adress: "curitiba",
    age: 21,
    married: false,
  },
  {
    id: 2,
    name: "tody",
    adress: "curitiba",
    age: 4,
    married: false,
  },
  {
    id: 3,
    name: "sacola",
    adress: "curitiba",
    age: 1,
    married: false,
  }
]

//uma das formas:
// fetch('https://pokeapi.co/api/v2/pokemon')
// .then((res) =>  {
//   console.log(res);
//   if (res.ok) {
//     res.json();
//   } else {
//     console.log("error");
//   }
// })
// .then((data) => console.log(data.results))
// .catch((err) => console.log(err))

// outra forma:
// fetch('https://reqres.in/api/users', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     name: 'andre',
//   }),
// })
//   .then(res => res.json())
//   .then(data => console.log(data))

function App() {
  const [count, setCount] = useState(0);

  const [value, setValue] = useState('Escreve ai em em baixo pra muda');

  const addCount = () => {
    setCount(count + 1);
  }

  const changeValue = (e) => {
    setValue(e.target.value);
  }

  return (
    <div>
      <h1>DOMINANDO O MAP( )</h1>
      <p>
        map é um metodo que percore cada casa do array.
      </p>
      <p>
        mostrando os dados do usuário
      </p>
      <div>
        {users.map((user, index) => (
          <li key={user.id}>{user.name}, {user.age}, {user.adress}, index = {index} </li>
        ))}
      </div>

      <h1>ENTENDENDO REQUISIÇÃO HTTP, FETCH E API</h1>
      <p>
        ta tudo comentado no codigo
      </p>
      <br />
      <h1> Hooks React - useState:</h1>
      <p>
        contador: {count}
      </p>
      <button onClick={addCount}>
        Adicionar ao contador
      </button>

      <h2>
        mudar oque ta escrito ai
      </h2>
      {value}
      <div>
        <input onChange={changeValue} type="text" />
      </div>
      <br />
      <h1>
        MODAL ? que isso. Exercicio pratico:
      </h1>
      <p>
        modal é aquela parada que abre quando clicamos em outra coisa pode ser chamado de popup
      </p>
          {Modal()}
        
    </div>
  )
}

export default App;
