import profileImg from '../assets/darth_vader.webp'

const Profile = ({ user, onLogout }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md text-center space-y-4">
      <img
        src={profileImg}
        alt="Profilbild"
        className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-black"
        data-testid="profile-image"
      />
      <h1 className="text-2xl font-bold">Välkommen {user}!</h1>
      <p className="text-gray-600">Du är nu inloggad.</p>
      <button
        onClick={onLogout}
        className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 cursor-pointer transition"
      >
        Logga ut
      </button>
    </div>
  )
}

export default Profile