# 🌽 Node Farm 🥦

A simple Node.js server-side rendered web app that displays farm product data using custom HTML templates. Built entirely with vanilla Node.js — no frameworks or external packages.

## 📦 Features

- Dynamic routing (`/overview`, `/product?id=`, `/api`)
- Custom template engine (`replaceTemplate.js`)
- Static JSON data rendering
- Organic product badge toggle
- Stylish frontend with emoji-based visuals

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/node-farm.git
cd node-farm
```

### 2. Install dependencies

> ✅ No external dependencies required — this project uses only built-in Node.js modules (`fs`, `http`, `url`). No need to run `npm install`.

### 3. Run the server

```bash
node app.js
```

### 4. Open in browser

Visit: [http://localhost:3000](http://localhost:3000)

---

## 🗂 Project Structure

```
node-farm/
├── app.js
├── replaceTemplate.js
├── dev-data/
│   └── data.json
├── templates/
│   ├── overview.html
│   ├── product.html
│   └── template-card.html
└── .prettierrc
```

---

## 📌 Routes

| Route            | Description                          |
|------------------|--------------------------------------|
| `/overview`      | Displays all products as cards       |
| `/product?id=0`  | Shows detailed view of one product   |
| `/api`           | Returns raw JSON data                |

---

## 🧠 How It Works

- `app.js` creates an HTTP server and handles routing.
- Templates are loaded once at startup for performance.
- `replaceTemplate.js` injects product data into HTML placeholders.
- Organic products show a badge; non-organic ones hide it via CSS.

---

## 🧑‍💻 Author

**Youssef** — Full-stack web developer passionate about building clean, efficient Node.js apps.
