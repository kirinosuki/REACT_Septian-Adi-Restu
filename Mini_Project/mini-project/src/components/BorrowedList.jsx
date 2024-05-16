// BorrowedList.jsx
import React, { useState, useEffect } from 'react';

function BorrowedList() {
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  // Fetch borrowed books data from backend when component mounts
  useEffect(() => {
    // Assume there is a function to fetch borrowed books data from backend
    // fetchData();
  }, []);

  // Function to fetch borrowed books data from backend
  const fetchData = async () => {
    try {
      // Fetch borrowed books data from backend API
      const response = await fetch('http://localhost:3001/borrowedBooks');
      const data = await response.json();
      setBorrowedBooks(data);
    } catch (error) {
      console.error('Error fetching borrowed books:', error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-700 mb-4">Borrowed Books</h2>
      <ul className="space-y-4">
        {borrowedBooks.map((book, index) => (
          <li key={index} className="bg-white p-4 rounded shadow">
            <div>
              <strong>{book.title}</strong> by {book.author}
            </div>
            <div>
              Borrowed by: {book.borrower.name} ({book.borrower.email})
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BorrowedList;