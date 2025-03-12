import useJokeStore from '../store/jokeStore'

const GetJokeBtn = () => {
  const fetchJoke = useJokeStore((state) => state.fetchJoke)
  return (
    <div className="d-flex justify-content-center">
      <button className="btn btn-primary mt-3" onClick={fetchJoke}>
        Get Joke
      </button>
    </div>
  )
}
export default GetJokeBtn