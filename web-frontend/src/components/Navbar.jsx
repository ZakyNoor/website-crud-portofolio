import { useAuth } from "../context/AuthContext"

export default function Navbar() {
  const { logout } = useAuth()

  return (
    <nav className="bg-gray-800 text-white flex justify-between items-center p-4">
      <h1 className="font-bold text-lg">Admin Panel</h1>
      <button
        onClick={logout}
        className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded"
      >
        Logout
      </button>
    </nav>
  )
}
