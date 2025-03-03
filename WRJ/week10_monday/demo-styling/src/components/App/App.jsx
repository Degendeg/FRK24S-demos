import { useEffect, useState } from 'react'
import '../../global.css'
import appStyles from './App.module.css'
import styled from 'styled-components'
import DogList from '../DogList/DogList'

const Button = styled.button`
  border-radius: 5px;
  color: white;
  background: blue;
  padding: 10px;
`

const DogImg = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
  border-radius: 5px;
  float: left;
  margin: 10px;
  transition: all .5s;
  &:hover {
    transform: scale(1.1);
  }
`

function App() {
  const [dogs, setDogs] = useState([])

  const getDogs = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(data => setDogs(dogs => [...dogs, data.message]))
  }

  useEffect(() => {
    for (let i = 0; i < 21; i++) {
      getDogs();
    }
    return () => {
      setDogs([])
    }
  }, [])

  const buttonStyles = {
    background: 'green'
  }

  return (
    <>
      <div style={{ marginLeft: 'auto', marginRight: 'auto', width: '200px', height: '200px', borderRadius: '10px', backgroundColor: 'red' }}>This is inline styling</div>
      <div className={appStyles.demoClass}>This is from a modular stylesheet</div>
      <Button>This is a styled component</Button>
      <DogList dogs={dogs} DogImg={DogImg} />
    </>
  )
}

export default App
