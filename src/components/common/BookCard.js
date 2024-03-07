import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Typography, IconButton, Tooltip } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import '../css/Home.css'

export default function BookCard({ book }) {

    return (

        <Card sx={{ maxWidth: 300, margin: '10px' }}>
            <div className="imgdiv">
            <div className='imagediv'>
            <CardMedia
                component="img"
               className='imageCard'
                image={book.volumeInfo.imageLinks?.thumbnail}
                alt={book.volumeInfo.title}
            />
         </div>
         </div>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {book.volumeInfo.title}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        overflow: 'hidden',
                        maxHeight: '3em',
                        textOverflow: 'ellipsis',
                    }}
                >
                    {book.volumeInfo.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <b>Price: ${book.saleInfo.retailPrice?.amount}</b>
                </Typography>
                {/* <Rating name="read-only" value={book.rating} readOnly /> */}
            </CardContent>

            <CardActions>
                <Tooltip title='Wishlist' placement='top'>
                    <IconButton aria-label="add to favorites">
                        <FavoriteBorderOutlinedIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title='Add to cart' placement='top'>
                    <IconButton aria-label="add to cart" >
                        <AddShoppingCartIcon />
                    </IconButton>
                </Tooltip>
            </CardActions>
        </Card>
    );
}
