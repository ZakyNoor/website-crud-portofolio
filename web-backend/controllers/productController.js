const db = require("../config/db")

exports.getProducts = (req, res) => {
  db.query("SELECT * FROM products", (err, result) => {
    if (err) return res.status(500).json(err)
    res.json(result)
  })
}

exports.createProduct = (req, res) => {
  const { name, price, category, stock } = req.body

  const sql = `
    INSERT INTO products (name, price, category, stock)
    VALUES (?, ?, ?, ?)
  `

  db.query(sql, [name, price, category, stock], (err, result) => {
    if (err) return res.status(500).json(err)
    res.json({ id: result.insertId, name, price, category, stock })
  })
}

exports.deleteProduct = (req, res) => {
  const id = req.params.id

  db.query("DELETE FROM products WHERE id = ?", [id], err => {
    if (err) return res.status(500).json(err)
    res.json({ message: "Produk dihapus" })
  })
}

exports.updateProduct = (req, res) => {
  const { id } = req.params
  const { name, price, category, stock } = req.body

  const sql = `
    UPDATE products
    SET name = ?, price = ?, category = ?, stock = ?
    WHERE id = ?
  `

  db.query(sql, [name, price, category, stock, id], (err, result) => {
    if (err) return res.status(500).json(err)

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Produk tidak ditemukan" })
    }

    res.json({ message: "Produk berhasil diupdate" })
  })
}

