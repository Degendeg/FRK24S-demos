const Layout = ({ title, children }) => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 p-6 text-gray-700 pt-20 space-y-6">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full space-y-6">
        {title && <h1 className="text-2xl font-bold mb-4">{title}</h1>}
        {children}
      </div>
    </div>
  )
}
export default Layout