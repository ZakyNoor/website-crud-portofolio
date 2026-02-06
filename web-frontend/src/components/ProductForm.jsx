import { useEffect, useState } from "react"
import api from "../services/api"

export default function ProductForm({ onSuccess, selectedProduct, clearSelected }) {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [stock, setStock] = useState("")
  const id = selectedProduct?.id
  
  useEffect(() => {
    if (selectedProduct) {
      setName(selectedProduct.name)
      setPrice(selectedProduct.price)
      setCategory(selectedProduct.category)
      setStock(selectedProduct.stock)
    } else {
      setName(""); setPrice(""); setCategory(""); setStock("")
    }
  }, [selectedProduct])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = { name, price: Number(price), category, stock: Number(stock) }

    try {
      if (selectedProduct) {
        await api.put(`/products/${id}`, data)
        clearSelected()
      } else {
        await api.post("/products", data)
      }
      onSuccess()
      setName(""); setPrice(""); setCategory(""); setStock("")
    } catch (err) {
      console.error(err)
      alert("Gagal menyimpan produk")
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded p-6 mb-6 max-w-lg mx-auto"
    >
      <h2 className="text-lg font-bold mb-4">
        {selectedProduct ? "Edit Produk" : "Tambah Produk"}
      </h2>

      <input
        type="text"
        placeholder="Nama"
        className="border p-2 w-full mb-3 rounded"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Harga"
        className="border p-2 w-full mb-3 rounded"
        value={price}
        onChange={e => setPrice(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Kategori"
        className="border p-2 w-full mb-3 rounded"
        value={category}
        onChange={e => setCategory(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Stok"
        className="border p-2 w-full mb-4 rounded"
        value={stock}
        onChange={e => setStock(e.target.value)}
        required
      />

      <div className="flex space-x-3">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex-1"
        >
          {selectedProduct ? "Update" : "Tambah"}
        </button>
        {selectedProduct && (
          <button
            type="button"
            onClick={clearSelected}
            className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded flex-1"
          >
            Batal
          </button>
        )}
      </div>
    </form>
  )
}
