import { Link, useLocation } from "react-router-dom"

const Home = () => {
  const loc = useLocation()
  const message = loc.state?.message
  return (
    <>
      <h1 className="text-3xl font-bold mb-6 text-center">Welcome</h1>
      {message && <p className="text-red-600 font-semibold mb-4 animate-pulse text-center">{message}</p>}
      <p className="text-gray-700 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <Link to="/login">
        <button className="w-full mt-5 cursor-pointer bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Go to login
        </button>
      </Link>
    </>
  )
}
export default Home