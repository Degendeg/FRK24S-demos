import useSWR from 'swr'

const PokeList = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json())

  const { data, error } = useSWR("https://pokeapi.co/api/v2/pokemon?limit=1500", fetcher)

  if (error) {
    return <div className="alert alert-danger">Failed to load Pokémons</div>
  }

  if (!data) {
    return <div className="text-center my5">
      <div className="spinner-border text-primary"></div>
    </div>
  }

  return (
    <div className="container mt-4">
      <div className="row">
        {data.results.map((pokemon, idx) => {
          const pokeId = idx + 1
          const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/${pokeId}.png`

          return (
            <div key={pokeId} className="col-md-4 col-lg-3 col-sm 6 mb-4">
              <div className="card text-center shadow">
                <img
                  src={imageUrl}
                  alt={pokemon.name + ' image'}
                  className="card-img-top mx-auto mt-3"
                  style={{ width: '100px' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h5>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default PokeList