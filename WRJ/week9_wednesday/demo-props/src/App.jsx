import './App.css'
import Child from './comps/Child'

function App() {
  const person = {
    name: 'Sebastian',
    age: 35,
    role: 'Educator',
    children: ['Alice', 'Ella'],
    isConfused: true
  }
  const helloWorld = "Hello World!";
  const rndNr = `Random number: ${Math.floor(Math.random() * 10) + 1}`
  return (
    <Child person={person} helloWorld={helloWorld} rndNr={rndNr} />
  )
}

export default App
