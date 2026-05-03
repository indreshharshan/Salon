
# ✂️ Trimly

> A modern multi-role salon booking platform built with the MERN stack.

[![MERN](https://img.shields.io/badge/Stack-MERN-3C873A?style=for-the-badge)](https://www.mongodb.com/mern-stack)
[![Frontend](https://img.shields.io/badge/Frontend-React_+_Vite-111827?style=for-the-badge\&logo=react)]()
[![Backend](https://img.shields.io/badge/Backend-Node.js_+_Express-0F172A?style=for-the-badge\&logo=node.js)]()
[![Database](https://img.shields.io/badge/Database-MongoDB-166534?style=for-the-badge\&logo=mongodb)]()

---

## 🚀 Overview

Trimly is a full-stack salon booking ecosystem with dedicated apps for:

* 👤 Customers
* 💼 Service Providers
* 🛠 Admins

The platform supports real-time booking updates, authentication, provider management, and analytics.

---

## 🧩 Modules

| App             | Description                                  |
| --------------- | -------------------------------------------- |
| User App        | Salon discovery, booking, profile & checkout |
| Provider Portal | Manage bookings, services & availability     |
| Admin Dashboard | Platform management & analytics              |
| Backend API     | REST API + Socket.io realtime server         |

---

## 🛠 Tech Stack

* React + Vite
* Tailwind CSS
* Node.js + Express
* MongoDB + Mongoose
* JWT Authentication
* Socket.io

---

## 📁 Project Structure

```bash
Trimly/
├── user/
├── provider/
├── admin/
├── backend/
└── render.yaml
```

---

## ⚡ Local Setup

```bash
git clone <repo-url>
cd Trimly
```

Install dependencies:

```bash
cd backend && npm install
cd ../user && npm install
cd ../provider && npm install
cd ../admin && npm install
```

Run apps:

```bash
# Backend
cd backend && npm run dev

# User App
cd user && npm run dev

# Provider App
cd provider && npm run dev

# Admin App
cd admin && npm run dev
```

---

## 🔐 Environment Variables

### Backend `.env`

```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
CLIENT_URLS=http://localhost:5173
```

### Frontend `.env`

```env
VITE_API_URL=http://localhost:5000
```

---

## ☁️ Deployment

| Service   | Platform      |
| --------- | ------------- |
| Frontends | Vercel        |
| Backend   | Render        |
| Database  | MongoDB Atlas |

---

## ✨ Features

* Multi-role authentication
* Salon service booking
* Provider approval system
* Real-time booking updates
* Admin analytics dashboard
* JWT protected APIs
* Responsive modern UI

---


