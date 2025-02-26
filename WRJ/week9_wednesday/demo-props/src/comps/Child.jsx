import SubChild from "./SubChild"

const Child = ({ person, helloWorld, rndNr }) => {
  return (
    <>
      <h1>Child.jsx</h1>
      <h1>{helloWorld}</h1>
      <h1>{rndNr}</h1>
      <SubChild person={person} />
    </>
  )
}
export default Child