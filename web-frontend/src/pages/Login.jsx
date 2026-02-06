import { useState } from "react"
import api from "../services/api"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

export default function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await api.post("/auth/login", { username, password })
      login(res.data.token)
      navigate("/admin/products")
    } catch {
      alert("Username atau password salah")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Login Admin</h1>

        <label className="block mb-2 text-gray-700 font-medium">Username</label>
        <input
          type="text"
          className="border p-3 w-full mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Masukkan username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />

        <label className="block mb-2 text-gray-700 font-medium">Password</label>
        <input
          type="password"
          className="border p-3 w-full mb-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Masukkan password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-200"
        >
          Login
        </button>

        <p className="mt-4 text-center text-gray-500 text-sm">
          Masukkan username & password admin untuk masuk
        </p>
      </form>
    </div>
  )
}
