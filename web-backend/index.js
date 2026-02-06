const express = require("express")
const cors = require("cors")

const productRoutes = require("./routes/products")
const authRoutes = require("./routes/auth")

const app = express()

app.use(cors())
app.use(express.json())
app.use("/auth", authRoutes)
app.use("/products", productRoutes)

app.listen(3000, () => {
  console.log("Backend running at http://localhost:3000")
})