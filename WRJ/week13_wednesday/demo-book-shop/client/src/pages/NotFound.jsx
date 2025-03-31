import { useNavigate } from "react-router-dom"

const NotFound = () => {
  const nav = useNavigate()
  return (
    <div className="wrapper">
      <h1>404</h1>
      <p>Page not found, we apologize for any inconvenience 😔</p>
      <button onClick={() => nav(-1)}>Go back</button>
    </div>
  )
}
export default NotFound