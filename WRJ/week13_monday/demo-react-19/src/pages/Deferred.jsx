import { useDeferredValue, useState, useEffect } from "react"

const Deferred = () => {
  const [input, setInput] = useState("")
  const [pokemonList, setPokemonList] = useState([])
  const deferredInput = useDeferredValue(input)

  useEffect(() => {
    // Hämta Pokémon-namn vid render
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
      .then((res) => res.json())
      .then((data) => setPokemonList(data.results.map((p) => p.name)))
  }, [])

  const filteredPokemon = pokemonList.filter((name) =>
    name.includes(deferredInput.toLowerCase())
  )

  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5 mb-5">
      <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
        <h2 className="text-center">useDeferredValue</h2>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Skriv Pokémon-namn..."
          onChange={(e) => setInput(e.target.value)}
        />
        <p className="text-muted">
          🔄 Visar fördröjd filtrering vid snabba inputs...
        </p>
        <ul className="list-group">
          {filteredPokemon.slice(0, 50).map((name) => (
            <li key={name} className="list-group-item">
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Deferred