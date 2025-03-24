import { useState } from "react"
import { useFormStatus } from "react-dom"

const SubmitForm = () => {
  const { pending } = useFormStatus()
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setMessage("")
    setTimeout(() => {
      setMessage("Meddelandet skickat!")
    }, 2000)
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-3">
      <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
        <h1 className="text-center mb-3">📝</h1>
        <p className="text-muted text-center">
          Status: <strong>{pending ? "Skickar..." : "Redo"}</strong>
        </p>
        <form onSubmit={handleSubmit}>
          <input
            className="form-control mb-3"
            placeholder="Skriv något..."
            disabled={pending}
          />
          <button className="btn btn-primary w-100" disabled={pending}>
            {pending ? "Skickar..." : "Skicka"}
          </button>
        </form>
        {message && <p className="text-success mt-3 text-center">{message}</p>}
      </div>
      <div className="card p-4 shadow-lg mt-5" style={{ width: "500px" }}>
        <code>
          <strong>-- OBS --</strong><br /> useFormStatus() är en serverfunktion och fungerar bara i server actions (t.ex. i Next.js eller med React Server Components).
          I vanlig React behöver vi hantera status manuellt med useState().
        </code>
      </div>
    </div>
  )
}

export default SubmitForm
