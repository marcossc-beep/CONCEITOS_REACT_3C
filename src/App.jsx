import { useState } from 'react'
import './App.css'
import Cadastro from './paginas/Cadastro'
import Login from './paginas/Login'
import Usuarios from './paginas/Usuarios'

function App() {
  const [tela, setTela] = useState('login')

  const trocarDeTela = (pagina) => {
    setTela(pagina)
  }

  const renderizar = () => {
    if (tela === 'usuarios') {
      return <Usuarios navegar={trocarDeTela}/>
    } else if (tela === 'login') {
      return <Login navegar={trocarDeTela} />
    } else if(tela === 'cadastro') {
      return <Cadastro navegar={trocarDeTela}/>
    } else{
      return <Login navegar={trocarDeTela}/>
    }
  }

  return (
    <>
      <button onClick={() => trocarDeTela('cadastro')}>Cadastro</button>
      <button onClick={() => trocarDeTela('login')}>Login</button>
      <button onClick={() => trocarDeTela('usuarios')}>Usuarios</button>
      <hr />
      {renderizar()}
    </>
  )
}

export default App
