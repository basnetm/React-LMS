import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import axios from 'axios';

const SingleBook = () => {

 const {id}=useParams()
 //console.log(id)
 const [book,setBooks]=useState({})

 const fetchbook=async()=>{
  const response=await axios.get(`http://localhost:3000/book/${id}`)
  if(response.status===200){
    setBooks(response.data.data)
  }
  console.log(response)
 }
useEffect(()=>{
  fetchbook()
},[])
console.log(book)
  return (
    <>
      <Navbar />
       <img 
          className="w-full" 
          src={book.imageUrl} 
          alt={book.bookName || "Book cover"} 
         />
     <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{book.bookName}</div>
      <p>rs.{book.bookPrice}</p>
      <p>
        
      </p>
     </div>

    </>
  );
};

export default SingleBook;
