
// Home.jsx
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Cards from '../components/Cards';
import axios from 'axios';

const Home = () => {
  const [books, setBooks] = useState([]);

  const fetchBook = async () => {
    try {
      const response = await axios.get('http://localhost:3000/book');
      if (response.status === 200) {
        setBooks(response.data.data); // Update state with fetched books
      }
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  useEffect(() => {
    fetchBook();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap justify-evenly mt-11">
        {books.length > 0 && books.map((book) => (
          <Cards key={book._id} book={book} /> // Use book as the prop name
        ))}
      </div>
    </div>
  );
};

export default Home;