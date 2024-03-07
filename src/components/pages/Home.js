import React from 'react'
import BookCard from '../common/BookCard'
import '../css/Home.css'

function Home({ filteredBookData }) {
  return (
    <div>
       <div className='card'>
                {filteredBookData.map(book => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
    </div>
  )
}

export default Home
