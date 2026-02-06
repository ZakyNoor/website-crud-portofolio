import { useEffect, useState } from "react"
import api from "../../services/api"
import AdminLayout from "../../layouts/AdminLayout"

export default function Dashboard() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    api.get("/products").then((res) => setProducts(res.data))
  }, [])

  useEffect(() => {
    api.get("/products")
      .then(res => setProducts(res.data))
      .catch(() => alert("Gagal memuat data dashboard"))
  }, [])
  
  const totalProducts = products.length
  const totalStock = products.reduce((sum, p) => sum + Number(p.stock), 0)
  const totalCategories = new Set(products.map(p => p.category)).size
  const lowStock = products.filter(p => p.stock < 5).length

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Dashboard Admin
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard title="Total Produk" value={totalProducts} />
        <StatCard title="Total Stok" value={totalStock} />
        <StatCard title="Kategori" value={totalCategories} />
        <StatCard title="Stok Rendah" value={lowStock} />
      </div>
    </AdminLayout>
  )
}

function StatCard({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
      <p className="text-gray-500 text-sm uppercase tracking-wide">
        {title}
      </p>
      <p className="text-4xl font-bold text-gray-800 mt-2">
        {value}
      </p>
    </div>
  )
}

