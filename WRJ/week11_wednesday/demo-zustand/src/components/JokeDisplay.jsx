import useJokeStore from '../store/jokeStore'

const JokeDisplay = () => {
  const joke = useJokeStore((state) => state.joke)

  return (
    <div className="card p-3 shadow-sm max-width-500 max-height-500">
      <h5 className="text-center">😂 Chuck Norris Joke</h5>
      <p className="mt-2">{joke}</p>
    </div>
  )
}
export default JokeDisplay