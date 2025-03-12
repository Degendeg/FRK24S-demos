import { create } from 'zustand'

const useJokeStore = create((set) => ({
  joke: 'Tryck på knappen för att få ett Chuck Norris-skämt!',
  fetchJoke: async () => {
    const res = await fetch("https://api.chucknorris.io/jokes/random")
    const data = await res.json()
    set({ joke: data.value })
  }
}))

export default useJokeStore