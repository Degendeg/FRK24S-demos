import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/" className="text-xl font-bold">Next.js Demo</Link>
        <div className="space-x-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/ssr" className="hover:underline">SSR</Link>
          <Link href="/ssg" className="hover:underline">SSG</Link>
        </div>
      </div>
    </nav>
  )
}
export default Navbar