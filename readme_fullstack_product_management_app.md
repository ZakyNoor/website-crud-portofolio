# 🛒 Fullstack Product Management App

A simple **fullstack web application** built for learning purposes, demonstrating how a modern web app is structured using **React (Vite)** on the frontend and **Express + MySQL** on the backend, complete with **JWT authentication** and **role separation (admin vs user)**.

This project is designed as a **learning & portfolio project**, not for production use.

---

## ✨ Features

### 👤 User
- View product list
- Clean and simple UI
- Public access (no login required)

### 🔐 Admin
- Login with JWT authentication
- Protected admin routes
- Create, update, and delete products (CRUD)
- Admin dashboard with statistics:
  - Total products
  - Total stock
  - Total categories
  - Low stock indicator

### 🧠 Technical Highlights
- Role separation (User vs Admin)
- REST API
- JWT-based authentication
- Protected routes (frontend & backend)
- Axios interceptor for token handling

---

## 🧱 Tech Stack

### Frontend
- React (Vite)
- React Router
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js
- JWT (JSON Web Token)
- MySQL (or MySQL-compatible service)

---

## 📁 Project Structure

```
project-root/
│
├── web-frontend/        # React (Vite) frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   │   ├── admin/
│   │   │   └── user/
│   │   ├── context/
│   │   ├── services/
│   │   └── layouts/
│   └── package.json
│
├── web-backend/         # Express backend
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── index.js
│   └── package.json
│
└── README.md
```

---

## 🔐 Authentication Flow (Admin)

1. Admin logs in via `/login`
2. Backend returns a JWT token
3. Token is stored in `localStorage`
4. Axios automatically attaches token to every request
5. Protected routes verify token (backend & frontend)
6. Unauthorized access redirects to login page

---

## 🚦 API Endpoints (Backend)

### Auth
- `POST /auth/login` → Admin login

### Products (Protected)
- `GET /products` → Get all products
- `POST /products` → Create product
- `PUT /products/:id` → Update product
- `DELETE /products/:id` → Delete product

---

## ⚙️ Environment Variables (Backend)

Create a `.env` file in `web-backend`:

```
DB_HOST=your_db_host
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
DB_PORT=3306
JWT_SECRET=your_secret_key
PORT=3000
```

---

## ▶️ How to Run Locally

### 1️⃣ Backend

```
cd web-backend
npm install
npm run dev
```

Backend will run on:
```
http://localhost:3000
```

---

### 2️⃣ Frontend

```
cd web-frontend
npm install
npm run dev
```

Frontend will run on:
```
http://localhost:5173
```

---

## 🎓 Learning Goals

This project was built to practice:
- Fullstack application structure
- API design
- Authentication & authorization
- State management in React
- Separation of concerns
- Admin dashboard UI patterns

---

## ⚠️ Notes

- This project uses **free-tier / local services**
- Database provider may vary depending on availability
- Not intended for production use

---

## 📌 Author

Built as a learning project by **Zaky Noor**.

If you are reviewing this as a recruiter or mentor:
> This project demonstrates understanding of fullstack fundamentals, not production scaling.

---

## 🙌 Thank You

Feel free to explore, modify, and learn from this project.
Happy coding! 🚀

