import { useNavigate } from "react-router-dom"

const NotFound = () => {
  const nav = useNavigate()
  return (
    <>
      <h1>404 error! 🚫</h1>
      <button onClick={() => nav(-1)}>Go back</button>
    </>
  )
}
export default NotFound