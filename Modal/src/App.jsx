import { Children, useState } from 'react'
import './App.css'
import Modal from './components/Modal'


function App() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>
        Abrir modal
      </button>
      <div>
        <Modal isOpen={isOpen} setCloseModal={() => setIsOpen(!isOpen)}>
        sou o children que voce passou la dentro do Modal
      </Modal>
    </div>
    </div >

  )
}

export default App
