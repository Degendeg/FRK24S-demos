import { jwtDecode } from 'jwt-decode'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const [time, setTime] = useState(null)
  const [decodedToken, setDecodedToken] = useState(null)
  const nav = useNavigate()
  const jwt = sessionStorage.getItem('jwt')

  useEffect(() => {
    if (!jwt) return

    const decoded = jwtDecode(jwt)
    setDecodedToken(decoded)

    const interval = setInterval(() => {
      const now = Math.floor(Date.now() / 1000)
      const secondsLeft = decoded.exp - now
      setTime(secondsLeft > 0 ? secondsLeft : 0)

      if (secondsLeft <= 0) {
        clearInterval(interval)
        sessionStorage.removeItem('jwt')
        nav('/', { state: { message: 'Session inactive, you were logged out.' } })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [jwt, nav])

  const logOut = () => {
    sessionStorage.removeItem('jwt')
    nav('/')
  }

  return (
    <>
      {decodedToken && (
        <div className="px-6">
          <h1 className="text-3xl font-bold mb-6 text-center">Profile: {decodedToken.username}</h1>
          <p className="text-gray-700 text-center leading-relaxed">
            {time && <>Time left: {time} seconds</>}
          </p>
          <button onClick={logOut}
            className="w-full mt-5 cursor-pointer bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
            Logout
          </button>
        </div>
      )}
    </>
  )
}
export default Profile