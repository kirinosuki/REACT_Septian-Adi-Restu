// BookList.jsx
import React from 'react';

function BookList({ books, onBorrow }) {
  console.log(books);
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-700 mb-4">Available Books</h2>
      <ul className="space-y-4">
        {books.map((book) => (
          <li key={book.id} className="flex justify-between items-center bg-white p-4 rounded shadow">
            <span>
              {book.title} by {book.author}
            </span>
            <button onClick={() => onBorrow(book)} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
              Borrow
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
