import GetJokeBtn from "./components/GetJokeBtn"
import JokeDisplay from "./components/JokeDisplay"

function App() {
  return (
    <div className="container mt-5">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <h2 className="text-center mb-4">Chuck Norris Joke Generator</h2>
          <JokeDisplay />
          <GetJokeBtn />
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  )
}

export default App
