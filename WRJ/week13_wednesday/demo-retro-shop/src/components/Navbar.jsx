const Navbar = ({ Link }) => {
    return (
        <nav className="bg-gray-900 text-white p-4 text-center">
            <Link to="/" className="text-xl font-semibold">Retro Shop</Link>
        </nav>
    )
}

export default Navbar