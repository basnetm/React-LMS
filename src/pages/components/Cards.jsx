// Cards.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ book }) => {
  return (
    <div className="mt-8">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        {/* Image */}
        <img 
          className="w-full" 
          src={book.imageUrl} 
          alt={book.bookName || "Book cover"} 
        />

        <div className="px-6 py-4">
          {/* Book Name */}
          <div className="font-bold text-xl mb-2">{book.bookName}</div>

          {/* Author Name */}
          {book.authorName && (
            <p className="text-gray-700 text-base">{book.authorName}</p>
          )}

          {/* Book Price */}
          {book.bookPrice && (
            <p className="text-gray-700 text-base">Rs. {book.bookPrice}</p>
          )}

          {/* Publication and ISBN */}
          {book.publication && (
            <p className="text-gray-700 text-base">Publication: {book.publication}</p>
          )}
          {book.isbn && (
            <p className="text-gray-700 text-base">ISBN: {book.isbn}</p>
          )}
        </div>

        {/* See More Link */}
        <div className="px-6 py-4">
          <Link 
            to={`/book/${book._id}`} // Use _id here if you're using MongoDB
            className="text-blue-500 hover:text-blue-700"
          >
            See More
          </Link>
        </div>

        {/* Tags */}
        <div className="px-6 pt-4 pb-2">
          {book.tags && book.tags.map((tag, index) => (
            <span 
              key={index} 
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;


