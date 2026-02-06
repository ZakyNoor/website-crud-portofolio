import { Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Products from "./pages/admin/Products"
import Dashboard from "./pages/admin/Dashboard"
import ProductList from "./pages/user/ProductList"
import ProtectedRoute from "./components/ProtectedRoute"
import Home from "./pages/user/Home"




export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products" element={<ProductList />} />

      <Route path="/admin/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/admin/products" element={<ProtectedRoute><Products /></ProtectedRoute>} />
    </Routes>
  )
}
