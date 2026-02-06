import { useEffect, useState } from "react"
import api from "../../services/api"
import NavbarUser from "../../components/NavbarUser"


export default function ProductList() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    api.get("/products")
      .then(res => setProducts(res.data))
      .catch(() => alert("Gagal memuat produk"))
  }, [])

  return (
    <div className="min-h-screen bg-gray-100">
       <NavbarUser />
        <div className="max-w-7xl mx-auto p-6">
          <h1 className="text-3xl font-bold text-center mb-10">
            Daftar Produk
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
    </div>
  )
}

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-5 flex flex-col">
      
      <div className="flex-1">
        <h2 className="text-xl font-semibold text-gray-800">
          {product.name}
        </h2>

        <span className="inline-block mt-2 text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
          {product.category}
        </span>

        <p className={`mt-4 font-medium
          ${product.stock < 5 ? "text-red-600" : "text-gray-600"}
        `}>
          Stok: {product.stock}
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <p className="text-2xl font-bold text-green-600">
          Rp {Number(product.price).toLocaleString("id-ID")}
        </p>

        <button
          disabled={product.stock === 0}
          className={`px-4 py-2 rounded-lg text-white text-sm
            ${product.stock === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"}
          `}
        >
          {product.stock === 0 ? "Habis" : "Beli"}
        </button>
      </div>

    </div>
  )
}
