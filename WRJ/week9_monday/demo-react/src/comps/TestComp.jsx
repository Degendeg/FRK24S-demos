const TestComp = () => {
  const greetingToStudent = (studentName) => {
    return `Greetings ${studentName}`
  }
  return (
    <>
      <h1>Hello from TestComp</h1>
      <h2>{greetingToStudent("Ewa")}</h2>
    </>
  )
}
export default TestComp