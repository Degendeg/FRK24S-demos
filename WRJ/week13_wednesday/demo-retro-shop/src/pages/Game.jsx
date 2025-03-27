const Game = ({ Link, useParams, games }) => {
  const { gameId } = useParams()
  const game = games.find(g => g.id === gameId)

  if (!game) {
    return (
      <div className="text-center text-red-500 text-5xl mt-[20vh]">
        <p>Produkten hittades inte 😞</p>
        <Link to="/" className="mt-4 inline-block bg-blue-500 text-xl text-white mt-[5vh] px-4 py-2 rounded">
          Tillbaka
        </Link>
      </div>
    )
  }
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-extrabold text-gray-800">{game.name}</h1>
      <img
        src={game.image}
        alt={game.name}
        className="rounded-lg mx-auto h-80 my-4 shadow-lg"
      />
      <p className="text-xl text-gray-700 mb-4">Pris: {game.price} SEK</p>

      <div className="space-y-4">
        <div className="flex justify-between text-gray-600 text-lg">
          <p><strong>Genre:</strong> {game.genre}</p>
          <p><strong>Utgivningsår:</strong> {game.releaseYear}</p>
        </div>

        <div className="text-gray-700 mt-4 text-lg">
          <strong>Beskrivning:</strong>
          <p className="mt-2">{game.description}</p>
        </div>
      </div>

      <Link to="/" className="mt-6 inline-block bg-blue-500 text-white px-4 py-2
        rounded-lg text-xl hover:bg-blue-700 transition-colors">
        Tillbaka
      </Link>
    </div>
  )
}
export default Game