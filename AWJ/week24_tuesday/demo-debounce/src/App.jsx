import { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'

function App() {
  const [query, setQuery] = useState('')
  const [debouncedQuery] = useDebounce(query, 500)
  const [meals, setMeals] = useState([])
  const [apiCallCount, setApiCallCount] = useState(0)

  useEffect(() => {
    const fetchMeals = async () => {
      if (!debouncedQuery) {
        setMeals([])
        return
      }

      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${debouncedQuery}`)
        setApiCallCount(prev => prev + 1)
        const data = await response.json()
        setMeals(data.meals || [])
      } catch (error) {
        console.error("Error fetching meals", error)
        setMeals([])
      }
    }
    fetchMeals()
  }, [debouncedQuery])

  useEffect(() => {
    if (apiCallCount > 0) {
      console.log('API call count:', apiCallCount)
    }
  }, [apiCallCount])

  return (
    <div className="min-h-screen py-10 px-4 bg-gray-100">
      <div className="mt-[5vh] p-20 m-20 bg-white">
        <h1 className="text-3xl font-bold text-center mb-6">🍽 Sök efter en maträtt</h1>
        <div className="max-w-xl mx-auto">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Skriv t.ex. 'pasta', 'chicken'..."
            className="w-full p-3 border border-gray-300 rounded-lg mb-6 text-lg shadow-sm"
          />

          {meals.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2">
              {meals.map((meal) => (
                <div key={meal.idMeal} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-1">{meal.strMeal}</h2>
                    <p className="text-sm text-gray-600">Kategori: {meal.strCategory}</p>
                    <p className="text-sm text-gray-600">Ursprung: {meal.strArea}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : debouncedQuery ? (
            <p className="text-xl text-center text-gray-600">Inga resultat för "{debouncedQuery}"</p>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default App
