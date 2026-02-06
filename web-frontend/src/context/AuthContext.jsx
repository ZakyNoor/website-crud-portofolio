import { createContext, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const navigate = useNavigate()
  const [token, setToken] = useState(localStorage.getItem("token"))

  const login = (newToken) => {
    setToken(newToken)
    localStorage.setItem("token", newToken)
    navigate("/admin/products") // redirect otomatis setelah login
  }

  const logout = () => {
    setToken(null)
    localStorage.removeItem("token")
    navigate("/login") // redirect otomatis setelah logout
  }

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
