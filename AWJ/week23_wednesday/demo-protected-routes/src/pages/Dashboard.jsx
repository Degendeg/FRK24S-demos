const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-4xl mb-4">Dashboard 📊</h1>
        <p className="text-1xl">
          This is a protected route! 🔒
        </p>
      </div>
    </div>
  )
}

export default Dashboard