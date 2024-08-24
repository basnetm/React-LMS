import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar/Navbar';

const Addbook = () => {
  const [book, setBook] = useState({
    bookName: '',
    bookPrice: '',
    ISBN: '',
    authorName: '',
    imageUrl: '' // To store image URL or file name
  });

  const [image, setImage] = useState(null); // To store the selected file

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({
      ...book,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Store the selected file
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('bookName', book.bookName);
    formData.append('bookPrice', book.bookPrice);
    formData.append('ISBN', book.ISBN);
    formData.append('authorName', book.authorName);
    if (image) {
      formData.append('image', image); // Append the image file
    }

    try {
      const response = await axios.post('http://localhost:3000/book', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (response.status === 201) {
        alert('Book added successfully!');
        setBook({
          bookName: '',
          bookPrice: '',
          ISBN: '',
          authorName: '',
          imageUrl: ''
        });
        setImage(null); // Reset the image state
      }
    } catch (error) {
      console.error('Error adding book:', error);
      alert('Failed to add book.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-md mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-4">Add Book</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Book Name</label>
            <input
              type="text"
              name="bookName"
              value={book.bookName}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Book Price</label>
            <input
              type="text"
              name="bookPrice"
              value={book.bookPrice}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">ISBN</label>
            <input
              type="number"
              name="ISBN"
              value={book.ISBN}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Author Name</label>
            <input
              type="text"
              name="authorName"
              value={book.authorName}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Book Image</label>
            <input
              type="file"
              name="image"
              onChange={handleImageChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addbook;
