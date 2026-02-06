const mysql = require("mysql2")

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // isi kalau ada
  database: "web_crud",
})

db.connect(err => {
  if (err) {
    console.error("DB error:", err)
    return
  }
  console.log("MySQL connected ✅")
})

module.exports = db
