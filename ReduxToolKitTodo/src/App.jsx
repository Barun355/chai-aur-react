import './App.css'
import AddToDo from './components/AddToDo'
import Todos from './components/Todos'

function App() {

  return (
    <>
      <h1 className='text-5xl'>Revision Redux - Toolkit</h1>
      <AddToDo />
      <Todos />
    </>
  )
}

export default App
