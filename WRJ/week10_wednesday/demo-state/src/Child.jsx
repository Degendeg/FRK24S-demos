const Child = ({ person, setPerson }) => {
  return (
    <>
      <h3>Child.jsx</h3>
      <button onClick={() => setPerson({ ...person, child: true })}>Update person 👶</button>
    </>
  )
}
export default Child