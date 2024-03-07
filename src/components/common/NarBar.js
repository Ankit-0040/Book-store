import React, { useState, useEffect } from 'react';
import api from '../Api/apikey';
import axios from "axios";
import TextField from '@mui/material/TextField';
import '../css/Home.css'
import Home from '../pages/Home';

function NarBar() {
    const [search, setSearch] = useState("");
    const [bookData, setBookData] = useState([]);
    const [filteredBookData, setFilteredBookData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=react&key=${api}`);
                setBookData(response.data.items);
                setFilteredBookData(response.data.items);
            } catch (error) {
                console.error('Error fetching book data:', error);
            }
        };

        fetchData();
    }, []);

    const searchBook = (evt) => {
        const searchTerm = evt.target.value;
        setSearch(searchTerm);
        const filteredBooks = bookData.filter(book =>
            book.volumeInfo.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredBookData(filteredBooks);
    }

    return (
        <div>
            <div className='search'>
                <TextField
                    id="standard-search"
                    label="Search Product"
                    type="search"
                    variant="standard"
                    sx={{ width: '400px' }}
                    value={search}
                    onChange={searchBook}
                />
            </div>

            <div className='container'>
               <Home filteredBookData={filteredBookData}/>
            </div>
        </div>
    )
}

export default NarBar;
