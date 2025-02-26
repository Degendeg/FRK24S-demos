const SubChild = ({ person }) => {
  return (
    <div style={{ border: '1px solid gray', padding: '10px' }}>
      <h1>SubChild.jsx</h1>
      <p>
        Hello, my name is {person.name} and I am {person.age} years old.
        I work as an {person.role.toLowerCase()} and on my spare time I need to take care of
        {' ' + person.children[0]} and {person.children[1]}. <br />
        <strong>Mental state?</strong> {person.isConfused ? ' Confused 🥴' : ' Not confused 😊'}
      </p>
    </div>
  )
}
export default SubChild