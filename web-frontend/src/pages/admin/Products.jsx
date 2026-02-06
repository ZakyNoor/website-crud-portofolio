import { useEffect, useState } from "react"
import api from "../../services/api"
import ProductForm from "../../components/ProductForm"
import AdminLayout from "../../layouts/AdminLayout"

export default function Products() {
  const [products, setProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)

  const fetchProducts = async () => {
    try {
      const res = await api.get("/products")
      setProducts(res.data)
    } catch (err) {
      console.error(err)
      alert("Gagal mengambil produk")
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm("Yakin mau hapus produk ini?")) return
    try {
      await api.delete(`/products/${id}`)
      fetchProducts()
    } catch (err) {
      console.error(err)
      alert("Gagal menghapus produk")
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Manajemen Produk
        </h1>
        <p className="text-gray-500 mt-1">
          Kelola produk yang tersedia di sistem
        </p>
      </div>

        <ProductForm
          onSuccess={fetchProducts}
          selectedProduct={selectedProduct}
          clearSelected={() => setSelectedProduct(null)}
        />

        <div className="mt-10 overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow-md overflow-hidden">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="border p-2">Nama</th>
                <th className="border p-2">Harga</th>
                <th className="border p-2">Kategori</th>
                <th className="border p-2">Stok</th>
                <th className="border p-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {products.map(p => (
                <tr
                key={p.id}
                className="text-center hover:bg-gray-100 transition"
                >              
                  <td className="border p-2">{p.name}</td>
                  <td className="border p-2">{p.price}</td>
                  <td className="border p-2">{p.category}</td>
                  <td className="border p-2">{p.stock}</td>
                  <td className="border p-2 space-x-2">
                    <button
                      onClick={() => setSelectedProduct(p)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1.5 rounded-md text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(p.id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded-md text-sm"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  )
}
