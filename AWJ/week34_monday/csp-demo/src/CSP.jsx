import { useState } from "react"

const CSP = () => {
  const [blocked, setBlocked] = useState(false)
  const [imageUrl, setImageUrl] = useState(null)

  const fetchImage = async () => {
    try {
      const res = await fetch("https://dog.ceo/api/breeds/image/random")

      if (!res.ok) {
        throw new Error("Could not get image")
      }

      const data = await res.json()
      setImageUrl(data.message)
      setBlocked(false)
    } catch (error) {
      console.error(error)
      setBlocked(true)
    }
  }

  return (
    <div>
      {blocked && <p>Image loading blocked by Content Security Policy (CSP)</p>}
      <button onClick={fetchImage}>Fetch 🐶 Image</button>
      {imageUrl && <img src={imageUrl} alt="Dog picture" />}
    </div>
  )
}
export default CSP