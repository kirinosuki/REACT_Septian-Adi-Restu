import React, { useState } from 'react';
import BookList from '../components/BookList';
import BorrowedList from '../components/BorrowedList';
import BorrowForm from '../components/BorrowForm';

const initialBooks = [
  { id: 1, title: 'Book 1', author: 'Author 1' },
  { id: 2, title: 'Book 2', author: 'Author 2' },
  { id: 3, title: 'Book 3', author: 'Author 3' }
];

function BorrowPage() {
  const [books, setBooks] = useState(initialBooks);
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBorrowClick = (book) => {
    setSelectedBook(book);
  };

  const handleBorrowSubmit = ({ book, name, email }) => {
    setBorrowedBooks([...borrowedBooks, { ...book, borrower: { name, email } }]);
    setBooks(books.filter(b => b.id !== book.id));
    setSelectedBook(null);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Borrow Books</h1>
      {selectedBook ? (
        <BorrowForm book={selectedBook} onSubmit={handleBorrowSubmit} />
      ) : (
        <BookList books={books} onBorrow={handleBorrowClick} />
      )}
      <BorrowedList borrowedBooks={borrowedBooks} />
    </div>
  );
}

export default BorrowPage;
