import { useOptimistic, useState } from "react"

const Optimistic = () => {
  const [likes, setLikes] = useState(0)
  const [optimisticLikes, setOptimisticLikes] = useOptimistic(likes)

  const handleLike = () => {
    setOptimisticLikes(likes + 1)
    setTimeout(() => setLikes(likes + 1), 1000)
  }

  return (
    <div className="container text-center mt-5 text-xl">
      <h2 className="fs-1">useOptimistic</h2>
      <p className="fs-3">Optimistiskt antal likes: {optimisticLikes}</p>
      <button className="btn btn-success fs-4" onClick={handleLike}>Like 👍</button>
    </div>
  )
}

export default Optimistic