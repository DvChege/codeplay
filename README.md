



# 🎮 CodePlay – Interactive Coding Platform

[![Vercel Status](https://api.netlify.com/api/v1/badges/your-vercel-site-id/deploy-status)](https://app.vercel.com/sites/your-vercel-site-name/deploys)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-13-black?logo=next.js)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0-38B2AC?logo=tailwind-css\&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-18-green?logo=node.js\&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-00C7B7?logo=netlify\&logoColor=white)

CodePlay is a **full-stack interactive coding platform** that helps learners practice coding challenges, build projects, and improve programming skills in a fun, game-like environment.

Built with **Next.js, TailwindCSS, Node.js, and Netlify Functions**, it combines a modern frontend with a serverless backend and integrates seamlessly with external APIs and databases.

---

## ✨ Features

* 🖥️ **Frontend**: Clean, responsive UI built with Next.js + TailwindCSS.
* ⚡ **Backend**: Serverless APIs powered by Vercel Functions.
* 📦 **Database Options**: Netlify Postgres, Supabase, or MongoDB Atlas.
* 🔐 **Authentication**: Secure user login/signup (JWT or Supabase Auth).
* 🎯 **Gamified Learning**: Coding challenges, progress tracking, leaderboards.

* ♿ **Accessibility**: WCAG 2.1 AA compliance for inclusive design.

---

## 🛠️ Technologies Used

* **Frontend**: [Next.js](https://nextjs.org/), [React](https://react.dev/), [TailwindCSS](https://tailwindcss.com/)
* **Backend**: [Netlify Functions](https://docs.netlify.com/functions/overview/), [Node.js](https://nodejs.org/)
* **Database**: [Netlify Postgres](https://docs.netlify.com/), [Supabase](https://supabase.com/), [MongoDB Atlas](https://www.mongodb.com/atlas)
* **Authentication**: Supabase Auth / JWT
* **Deployment & Hosting**: [Vercel](https://www.vercel.com/)
* **Version Control**: Git + GitHub
* **Testing**: [Jest](https://jestjs.io/), [Vitest](https://vitest.dev/)

---

## 🚀 Deployment (Netlify Full-Stack)

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/codeplay.git
cd codeplay
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Locally

Frontend + backend together:

```bash
vercel dev
```

This runs Next.js locally and proxies API requests to your serverless functions.

### 4. Deploy to Netlify

1. Push your repo to GitHub.
2. Go to [Netlify](https://app.vercel.com/) → **New site from Git**.
3. Select your repo.
4. Configure build settings:

   * **Build command**:

     ```bash
     npm run build
     ```
   * **Publish directory**:

     ```
     .next
     ```
5. Add environment variables in Vercel Dashboard.
6. Deploy 🚀

---

## 🔑 Environment Variables

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_API_URL=/.netlify/functions/api
DATABASE_URL=your_database_connection_string
SUPABASE_KEY=your_supabase_key
JWT_SECRET=your_secret_key
```

On Vercel, add the same in:
**Site Settings → Build & Deploy → Environment → Environment Variables**.

---

## 📡 API Endpoints

All serverless APIs live in `/netlify/functions/`.

Example:

```js
// netlify/functions/hello.js
export async function handler(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from CodePlay API!" }),
  };
}
```

Access at:

```
https://your-site.netlify.app/.netlify/functions/hello
```

---

## 🧪 Testing

* Run local tests:

  ```bash
  npm run test
  ```
* Use [Jest](https://jestjs.io/) or [Vitest](https://vitest.dev/) for unit tests.

---

## 🌍 Browser & Accessibility Support

* ✅ Chrome (latest 2 versions)
* ✅ Firefox (latest 2 versions)
* ✅ Safari (latest 2 versions, desktop + iOS)
* ✅ Edge (latest 2 versions)
* ♿ WCAG 2.1 AA compliance (keyboard navigation, color contrast, screen-reader friendly).

---

## 🤝 Contributing

1. Fork the repo.
2. Create a feature branch:

   ```bash
   git checkout -b feature/new-feature
   ```
3. Commit changes:

   ```bash
   git commit -m "Add new feature"
   ```
4. Push and open a Pull Request.

---

## 📜 License

MIT License © 2025 \[DvChege]


