import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className='text-5xl bg-green-400 rounded-xl mb-2'>Tailwindcss</h1>
      <Card username='Barun Tiwary' btnTxt='Click me'/>
      <Card username='Chai aur Code'/>
    </>
  )
}

export default App
