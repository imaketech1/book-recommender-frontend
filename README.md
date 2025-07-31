# 📚 Book Recommender Frontend
![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)


A modern, interactive frontend for the AI powered Book Recommender App.

Built with **Next.js**, **Tailwind CSS**, and **TypeScript**, this UI consumes recommendations from a FastAPI backend and displays them as rich book cards with popups and book metadata.

## ✨ Features

- 🎯 Clean UI, Tailwind-powered
- 💬 Clickable cards open a popup with more info
- 🔁 Works with dynamic recommendations from the backend

## 🧪 Running Locally

### Prerequisites

- Node.js (18+)
- Backend running separately (see link below)

### Steps

```bash
git clone https://github.com/imaketech1/book-recommender-frontend.git
cd book-recommender-frontend
npm install
npm run dev
````

By default, the frontend fetches recommendations from:

```
book-recommender-frontend/
├── .env.local
```

If you deploy the backend, update the API base URL in your environment config:

```env
NEXT_PUBLIC_API_URL=https://your-backend-url.com
```

## 🔗 Backend

The backend is a separate FastAPI project that handles semantic search using FAISS and Sentence Transformers. You can find it here:

👉 [Book Recommender Backend Repository](https://github.com/imaketech1/book-recommender-llm)


## 🚀 Future Plans

* Connect with deployed backend
* Deploy frontend (e.g., Vercel or Netlify)
* Include a screen-recorded walkthrough demo
