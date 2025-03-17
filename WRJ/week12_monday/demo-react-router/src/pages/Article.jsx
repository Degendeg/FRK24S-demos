import { useParams } from "react-router-dom"

const Article = () => {
  const { id } = useParams()
  return (
    <>
      <h1>This is an article 📰</h1>
      <h2>Article nr: {id}</h2>
    </>
  )
}
export default Article