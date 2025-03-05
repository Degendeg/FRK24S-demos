import { useRef, useState } from 'react'
import './App.css'

function App() {
  const usernameRef = useRef(null)
  const passwordRef = useRef(null)
  const confirmPasswordRef = useRef(null)
  const [error, setError] = useState("")
  const [isRegistered, setIsRegistered] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const validatePassword = (password) => {
    return password.length >= 8 && /[!@#$%^&*(),.?":{}|<>]/.test(password)
  }

  const handleRegister = (event) => {
    event.preventDefault()
    const username = usernameRef.current.value
    const password = passwordRef.current.value
    const confirmPassword = confirmPasswordRef.current.value

    if (!validatePassword(password)) {
      setError("Lösenordet måste vara minst 8 tecken och innehålla en specialkaraktär (#%!)")
      return
    }

    if (password !== confirmPassword) {
      setError("Lösenorden matchar inte.")
      return
    }

    setError("")
    setIsRegistered(true)
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-diagonal-lines">
      <form
        className="bg-white p-8 rounded-lg shadow-lg w-96 flex flex-col space-y-4"
        onSubmit={handleRegister}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Ny användare 👤</h2>
        <input
          ref={usernameRef}
          type="text"
          spellcheck="false"
          placeholder="Användarnamn"
          className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <div className="relative w-full">
          <input
            ref={passwordRef}
            type={showPassword ? "text" : "password"}
            placeholder="Lösenord"
            className="border border-gray-300 rounded-lg p-3 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <span
            className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M1 12C1 12 5 20 12 20C19 20 23 12 23 12" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="12" r="3" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M2 2L22 22" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.71277 6.7226C3.66479 8.79527 2 12 2 12C2 12 5.63636 19 12 19C14.0503 19 15.8174 18.2734 17.2711 17.2884M11 5.05822C11.3254 5.02013 11.6588 5 12 5C18.3636 5 22 12 22 12C22 12 21.3082 13.3317 20 14.8335" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 14.2362C13.4692 14.7112 12.7684 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001C9 11.1764 9.33193 10.4303 9.86932 9.88818" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </span>
        </div>
        <div className="relative w-full">
          <input
            ref={confirmPasswordRef}
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Bekräfta lösenord"
            className="border border-gray-300 rounded-lg p-3 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <span
            className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M1 12C1 12 5 20 12 20C19 20 23 12 23 12" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="12" r="3" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M2 2L22 22" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.71277 6.7226C3.66479 8.79527 2 12 2 12C2 12 5.63636 19 12 19C14.0503 19 15.8174 18.2734 17.2711 17.2884M11 5.05822C11.3254 5.02013 11.6588 5 12 5C18.3636 5 22 12 22 12C22 12 21.3082 13.3317 20 14.8335" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 14.2362C13.4692 14.7112 12.7684 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001C9 11.1764 9.33193 10.4303 9.86932 9.88818" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </span>
        </div>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-white p-3 w-full rounded-lg font-semibold transition"
        >Registrera</button>
        {isRegistered && <p>Användaren <strong>{usernameRef && usernameRef.current.value}</strong> är nu registrerad!</p>}
      </form>
    </div>
  )
}

export default App
