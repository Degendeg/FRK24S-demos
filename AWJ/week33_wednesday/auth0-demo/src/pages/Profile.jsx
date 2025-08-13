import { useAuth0 } from "@auth0/auth0-react"

const Profile = () => {
  const { user, logout } = useAuth0()
  console.log('user', user)
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md text-center">
        <img
          src={user.picture}
          alt="Profilbild"
          className="w-24 h-24 mx-auto rounded-full mb-4"
        />
        <h2 className="text-xl font-semibold">{user.name}</h2>
        <p className="text-gray-500">{user.email}</p>
        <button
          className="mt-4 bg-gray-200 opacity-30 text-sm px-4 py-2 rounded-xl"
          disabled
        >
          Redigera profil
        </button>
        <button
          onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
          className="mt-6 block w-full bg-red-500 text-white py-2 rounded-xl hover:bg-red-600 cursor-pointer"
        >
          Logga ut
        </button>
      </div>
    </div>
  )
}

export default Profile