// src/pages/HomePage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginModal from '../components/LoginModal';

function HomePage() {
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleLoginClose = () => {
    setShowLogin(false);
  };

  const handleLoginSuccess = () => {
    navigate('/admin'); // Mengarahkan pengguna ke halaman AdminDashboard setelah berhasil login
  };

  const handleGoToBorrowingSystem = () => {
    navigate('/booklist'); // Mengarahkan pengguna ke halaman BookList saat tombol diklik
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to the Library Borrowing System</h1>
      <p className="text-lg text-gray-600 mb-8">Borrow your favorite books easily and quickly.</p>
      <button onClick={handleLoginClick} className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Admin Login</button>
      <button onClick={handleGoToBorrowingSystem} className="mt-4 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Go to Borrowing System</button>
      {showLogin && <LoginModal onClose={handleLoginClose} onLogin={handleLoginSuccess} />}
    </div>
  );
}

export default HomePage;
