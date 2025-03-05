import { useState } from 'react'
import './App.css'
import Child from './Child'

function App() {
  const [firstName, setFirstName] = useState('Jane')
  const [lastName, setLastName] = useState('Bar')
  const [person, setPerson] = useState({
    name: 'Sebbe',
    age: 35
  })
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5])

  let fName = 'Sebastian'
  let lName = 'Degerman'

  const nameHandler = () => {
    fName = 'John';
    lName = 'Doe';
    console.log(firstName + ' ' + lastName)
  }

  return (
    <>
      {/* Non reactive data */}
      <h2>My name is {fName + ' ' + lName}</h2>
      <button onClick={nameHandler}>Change name</button>
      <hr />

      {/* Reactive data  */}
      <h2>My name is {firstName + ' ' + lastName}</h2>
      <button onClick={() => {
        const names = ['Mario', 'Janne', 'Stoffe', 'Kenta']
        setFirstName(names[Math.floor(Math.random() * names.length)])
        setLastName('Bianchi')
      }}>Change name</button>
      <hr />

      {/* Spread operator usage - object {} */}
      <pre>{JSON.stringify(person)}</pre>
      <button onClick={() => setPerson({ ...person, role: 'Teacher' })}>Update person</button>
      <hr />

      {/* Spread operator usage - array [] */}
      <pre>{JSON.stringify(numbers)}</pre>
      <button onClick={() => setNumbers([...numbers, numbers.length + 1])}>Add number</button>
      <hr />

      {/* Send state as props */}
      <Child person={person} setPerson={setPerson} />
    </>
  )
}

export default App
