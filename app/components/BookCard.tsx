"use client";
import React, { useState } from "react";

interface BookCardProps {
  title: string;
  author: string;
  img: string;
  genre: string;
  pages: number;
  bookformat: string;
  rating: number;
  desc: string;
}

const BookCard: React.FC<BookCardProps> = ({
  title,
  author,
  img,
  genre,
  pages,
  bookformat,
  rating,
  desc,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;
    return (
      <>
        {"★".repeat(fullStars)}
        <span className="text-gray-300">{"★".repeat(emptyStars)}</span>
      </>
    );
  };

  return (
    <>
      {/* ✅ Book Card */}
      <div
        className="bg-pink-100 border-2 border-pink-300 rounded-lg shadow hover:scale-105 transition-all cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div className="bg-pink-200 px-4 py-1 border-b-2 border-pink-300 rounded-t-md flex justify-between items-center">
          <span className="text-sm text-pink-700">📘 {bookformat}</span>
          <span className="text-pink-500">{renderStars(rating)}</span>
        </div>
        <div className="p-4 text-center">
          <div className="h-[225px] flex justify-center items-center overflow-hidden">
            <img
              src={img}
              alt={title}
              className="object-contain h-full max-w-full"
            />
          </div>
          <h2 className="text-lg font-bold text-pink-700 mt-2">{title}</h2>
          <p className="text-sm text-pink-600">by {author}</p>
          <p className="text-sm text-pink-500 mt-1">📚 {genre.split(",")[0]}</p>
          <p className="text-xs text-pink-400">Pages: {pages}</p>
        </div>
      </div>

      {/* ✅ Popup Modal */}
     {isOpen && (
  <div
    className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-center items-center p-4"
    onClick={() => setIsOpen(false)} 
  >
    <div
      className="bg-white rounded-lg max-w-3xl w-full p-6 shadow-lg relative"
      onClick={(e) => e.stopPropagation()} 
    >
      {/* Close Button */}
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-2xl font-bold"
      >
        ×
      </button>

      {/* Top Bar */}
      <div className="text-pink-700 font-semibold text-sm mb-4">
        📘 {bookformat}
      </div>

      {/* Modal Content */}
      <div className="flex flex-col md:flex-row gap-4">
        <img
          src={img}
          alt={title}
          className="w-full md:w-48 object-contain rounded-lg border"
        />
        <div className="flex-1">
          <h2 className="text-xl font-bold text-pink-800">{title}</h2>
          <p className="text-sm text-gray-600 mb-1">by {author}</p>
          <p className="text-sm text-gray-700 mb-4">{desc}</p>
          <p className="text-sm text-gray-500 mb-2">📚 {genre}</p>
          <p className="text-sm text-pink-700 font-medium">
            ⭐ Rating: {rating}/5
          </p>
        </div>
      </div>
    </div>
  </div>
)}

    </>
  );
};

export default BookCard;
