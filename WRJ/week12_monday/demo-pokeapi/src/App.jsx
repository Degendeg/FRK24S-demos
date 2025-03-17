import "bootstrap/dist/css/bootstrap.min.css"
import PokeList from "./components/PokeList"

function App() {
  return (
    <div className="container">
      <div className="text-center mt-4">Pokémon API Demo</div>
      <PokeList />
    </div>
  )
}

export default App
