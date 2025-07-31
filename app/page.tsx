"use client";

import { useEffect, useState } from "react";
import BookCard from "@/app/components/BookCard";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"
import { Rowdies } from 'next/font/google';

const rowdie = Rowdies({ subsets: ['latin'], weight: '700' });
export default function HomePage() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState<any[]>([]);
  const [loading, setIsLoading] = useState(false);
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');


  const handleLogoClick = () => {
    setQuery("");
    setBooks([]);
    router.push("/");
  };

async function getRecommendations() {
  setIsLoading(true);
  setErrorMessage(''); 

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/recommend`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });

    if (!res.ok) {
      throw new Error('API returned an error');
    }

    const data = await res.json();
    console.log("API response:", data);
    setBooks(data.books || []);
  } catch (err) {
    console.error("Fetch failed:", err);
    setErrorMessage("Failed to get recommendations. Try again later.");
    setTimeout(() => {
      setErrorMessage('');
    }, 10000);
  
  } finally {
    setIsLoading(false);
  }
}



useEffect(() => {
  console.log("Books updated:", books, books.length);
}, [books]);

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-start p-8"
            style={{
              backgroundImage: `
                linear-gradient(to bottom right, #d7aefb, #ffc7e3),
                linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)
              `,
              backgroundSize: '120px 150px',
              backgroundAttachment: 'fixed'
            }}>
          
        <div className="flex items-center gap-6 p-4">
  <div
    className="flex items-center gap-2 group transition-transform duration-300 hover:scale-95 active:scale-90"
  >
    <span         onClick={handleLogoClick}
    className={`text-[42px] font-bold tracking-tight ${rowdie.className}`}
>Fav Book Recommender</span>
  </div></div>
      
{loading && (
  <div className="flex justify-center items-center">
    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-pink-500"></div>
  </div>
)}
<div className="w-full max-w-3xl mx-auto">

<div className="flex items-center gap-2 p-2 border-2 border-pink-300 rounded-md bg-pink-100 shadow-lg">
 <span className="text-pink-600 text-xl">🔍</span> <input
    type="text"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    placeholder="I like fantasy but not too long"
    className="bg-transparent focus:outline-none w-full text-sm text-pink-800 placeholder:text-pink-400"
  />  
        <Button variant="outline"
          onClick={getRecommendations}
          className="bg-blue-400 text-white px-4 py-2 rounded"
        >
          Recommend
        </Button>
        <br></br>
      </div>
      </div>
<br></br>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        {books.map((book, index) => (
          
          <BookCard
  key={index}
  title={book.title}
  author={book.author}
  img={book.img}
  genre={book.genre}
  bookformat={book.bookformat}
  rating={book.rating}
  pages={book.pages}
  desc={book.desc}
/>

        ))}
      </div>
      {errorMessage && (
  <p className="text-red-600 text-sm mt-6 text-center animate-pulse">
    {errorMessage}
  </p>
)}

    </main>
  );
}
