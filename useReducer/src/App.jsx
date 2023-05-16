import { useReducer } from 'react'
import './App.css'

const reducer = (state, action) => {
  switch (action.type) {
    case 'Increment':
      return { ...state, count: state.count + 1 }
    case 'showText':
      return { ...state, showText: !state.showText }
    default:
      return "this action doens't exist"
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showText: true,
  })
  const { count, showText } = state;

  const handleClick = () => {
    dispatch({ type: 'Increment' });
    dispatch({ type: 'showText'});
  }
  
  return (
    <>
      <h1>useReducer</h1>
      <div className="card">
        <button onClick={handleClick}>
          count is {count}
        </button>
        <p>
          {showText && <p>toma no cu ai</p>}
        </p>
      </div>
    </>
  )
}

export default App
