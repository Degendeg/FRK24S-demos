import { useState, useEffect } from "react"

const RandomName = () => {
  const [names] = useState([
    'John', 'Mary', 'Bob', 'Loke', 'Zeb', 'Tom', 'Ella'
  ])
  const [randomName, setRandomName] = useState('')
  useEffect(() => {
    setRandomName(names[Math.floor(Math.random() * names.length)])
  }, [])
  return (
    <h1 className="cursor-pointer"
      onClick={() => setRandomName(names[Math.floor(Math.random() * names.length)])}>
      My name is {randomName} 👋
    </h1>
  )
}
export default RandomName