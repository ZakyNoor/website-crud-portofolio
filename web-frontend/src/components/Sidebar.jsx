import { Link, useLocation } from "react-router-dom"

export default function Sidebar() {
  const location = useLocation()

  const linkClass = (path) =>
    `block px-3 py-2 rounded transition
     ${location.pathname === path
       ? "bg-gray-800 text-blue-400"
       : "hover:bg-gray-800 hover:text-blue-400"}`

  return (
    <div className="w-60 bg-gray-900 text-white min-h-screen p-4">
      <nav className="space-y-2">
        <Link
          to="/admin/dashboard"
          className={linkClass("/admin/dashboard")}
        >
          Dashboard
        </Link>

        <Link
          to="/admin/products"
          className={linkClass("/admin/products")}
        >
          Produk
        </Link>
      </nav>
    </div>
  )
}
