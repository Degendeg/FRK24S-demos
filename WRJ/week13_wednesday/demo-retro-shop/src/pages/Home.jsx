const Home = ({ Link, games }) => {
  return (
    <div className="text-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {games.map((game) => (
          <div key={game.id} className="border p-4 rounded-lg shadow-lg">
            <img src={game.image} alt={game.name + " image"} className="w-full h-48 object-cover mb-2 border" />
            <h2 className="text-xl font-semibold">{game.name}</h2>
            <p className="text-gray-700">Pris: {game.price} SEK</p>
            <Link to={`/game/${game.id}`} className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded">Läs mer</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Home