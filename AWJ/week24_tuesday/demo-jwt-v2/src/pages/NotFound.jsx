import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <>
      <h1 className="text-3xl text-red-700 font-bold mb-6 text-center">404 - Page not found</h1>
      <div className="h-[1vh]"></div>
      <button className="w-full cursor-pointer transition bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        <Link to="/">Go back</Link>
      </button>
    </>
  )
}
export default NotFound