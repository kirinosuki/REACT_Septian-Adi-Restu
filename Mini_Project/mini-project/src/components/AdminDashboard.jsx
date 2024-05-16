import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BorrowedList from './BorrowedList';
import BookList from './BookList';

function AdminDashboard() {
  
  const [books, setBooks] = useState([]);
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const navigate = useNavigate();

  console.log(books);
  
  useEffect(() => {
    fetchBooks();
    fetchBorrowedBooks();
  }, []);

  const handleLogout = () => {
    navigate('/');
  };

  const fetchBooks = async () => {
    try {
      const response = await fetch('http://localhost:3001/books');
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const fetchBorrowedBooks = async () => {
    try {
      const response = await fetch('http://localhost:3001/borrowedBooks');
      const data = await response.json();
      setBorrowedBooks(data);
    } catch (error) {
      console.error('Error fetching borrowed books:', error);
    }
  };

  const deleteBorrowedBook = async (bookId) => {
    try {
      const response = await fetch(`http://localhost:3001/borrowedBooks/${bookId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete borrowed book');
      }
      fetchBorrowedBooks();
    } catch (error) {
      console.error('Error deleting borrowed book:', error);
    }
  };

  const updateBorrowedBook = async (updatedBorrowedBook) => {
    try {
      const response = await fetch(`http://localhost:3001/borrowedBooks/${updatedBorrowedBook.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedBorrowedBook),
      });
      if (!response.ok) {
        throw new Error('Failed to update borrowed book');
      }
      fetchBorrowedBooks();
    } catch (error) {
      console.error('Error updating borrowed book:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <button onClick={handleLogout} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition mb-4">Logout</button>
      
      <section>
        <h2 className="text-2xl font-bold mb-4">Manage Books</h2>
        <BookList books={books} />
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-4">Manage Borrowed Books</h2>
        <BorrowedList borrowedBooks={borrowedBooks} onDelete={deleteBorrowedBook} onUpdate={updateBorrowedBook} />
      </section>
    </div>
  );
}

export default AdminDashboard;
