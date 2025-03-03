// props som objekt, hämta message nedanför. 
// kan destructas till ({message}) ifall props är komplex med mångsidig data
const Child1 = (props) => {
  return (
    <>
      <h1>Child1.jsx</h1>
      <div>{props.message}</div>
    </>
  )
}
export default Child1