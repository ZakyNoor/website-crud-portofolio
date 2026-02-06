import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to Product Store
      </h1>

      <p className="text-gray-600 mb-8">
        Lihat produk atau login sebagai admin
      </p>

      <div className="flex space-x-4">
        <Link
          to="/products"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
        >
          Lihat Produk
        </Link>

        <Link
          to="/login"
          className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg"
        >
          Login Admin
        </Link>
      </div>
    </div>
  )
}
