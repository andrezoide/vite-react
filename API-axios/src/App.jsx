import './App.css';
import axiosInstance from './helper/axios.instance';
import { useAxios } from './hook/use-axios';

function App() {
  const [data, isLoading, error] = useAxios({
    axiosInstance: axiosInstance,
    method: 'GET',
    url: 'pokemon',
  });
  
  //ta rolando muita replicação de logica, entao vamo cria um hook customizado pra evitar isso ai. quantos menos logicas dentro do componente melhor, as coisas tem que vir tratadas.
  // const [pokemonList, setPokemonList] = useState([]);
  // const [pokedexList, setPokedexList] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // //useEffect é tipo pra gente falar pra pagina fazer essa requisição 1x
  // useEffect(() => {
  //   // a axios instance eu criei na outra pastinha pra escrever um pouco menos de codigo aqui e ficar mais organizado, passando somente o final da URL
  //   axiosInstance
  //     .get('pokemon')
  //     .then((res) => {
  //       // aqui foi um exemplo de caso eu quisesse colocar uma tela de loading enquanto a req pega os pokemons
  //       setIsLoading(true)
  //       setPokemonList(res.data.results)
  //     })
  //     // se der erro os pokemons nao chegam e cai aqui nesse catch.
  //     .catch((err) => console.log(err))
  //     // aqui no finally é só pra avisar pro state isLoading que pode parar de carregar e os pokemons chegaram
  //     .finally(() => setIsLoading(false));
  //   axiosInstance
  //     .get('pokedex')
  //     .then((res) => setPokedexList(res.data.results))
  //     .catch((err) => console.log(err))
  // }, [])

  if (isLoading) {
    return <div>
        Loading
    </div>
  }
  if (error) {
    return <div>
      ERORRR
    </div>
  }

  return (
    <>
      <header>
        <div>
          <h1>API Axios</h1>
        </div>
      </header>
      <section>
        <div>
          {/* os pontos de interrogaçao na frente é pra dizer nao executar nada enquando for undefined, evitando erro dele tentar fazer o map antes de carregar os dados */}
          {data.results.map((pokemon) => (<div key={pokemon.name}> {pokemon.name} </div>))}
        </div>
      </section>
    </>
  )
}

export default App
