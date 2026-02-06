import { Link } from "react-router-dom"

export default function NavbarUser() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto p-4 flex justify-between">
        <h1 className="font-bold text-xl">Product Store</h1>
        <Link
          to="/login"
          className="text-blue-600 hover:underline"
        >
          Admin Login
        </Link>
      </div>
    </nav>
  )
}
