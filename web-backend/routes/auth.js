const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const db = require("../config/db")

const SECRET = "SECRET_KEY_KAMU"

router.post("/login", (req, res) => {
  const { username, password } = req.body

  db.query(
    "SELECT * FROM admins WHERE username = ?",
    [username],
    async (err, result) => {
      if (err) return res.status(500).json(err)
      if (result.length === 0)
        return res.status(401).json({ message: "User tidak ditemukan" })

      const admin = result[0]
      const isMatch = await bcrypt.compare(password, admin.password)

      if (!isMatch)
        return res.status(401).json({ message: "Password salah" })

      const token = jwt.sign(
        { id: admin.id, username: admin.username },
        SECRET,
        { expiresIn: "1h" }
      )

      res.json({ token })
    }
  )
})

module.exports = router
