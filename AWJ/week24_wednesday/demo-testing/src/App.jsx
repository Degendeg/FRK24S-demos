import { useState } from 'react'
import Login from './pages/Login'
import Profile from './pages/Profile'

function App() {
  const [user, setUser] = useState(null)

  return (
    <div className={`min-h-screen ${user ? 'bg-gray-400' : 'bg-gray-600'} flex items-center justify-center transition duration-500`}>
      {!user ? (
        <Login onLogin={setUser} />
      ) : (
        <Profile user={user} onLogout={() => setUser(null)} />
      )}
    </div>
  )
}

export default App
