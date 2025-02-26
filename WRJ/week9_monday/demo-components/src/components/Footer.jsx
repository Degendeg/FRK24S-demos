const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      Footer &copy; {currentYear}
    </footer>
  )
}
export default Footer