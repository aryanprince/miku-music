import React from 'react'
import { Link } from 'react-router-dom'

import Price from './Price'
import Rating from './Rating'

export default function Book({ book }) {
    return (
        <div className="book">
            {/* BOOK IMAGE */}
            <Link to={`/books/${book.id}`}>
                <figure className="book_img-wrapper">
                    <img src={book.url} alt="" />
                </figure>
            </Link>

            {/* BOOK TITLE */}
            <div className="book__title">
                <Link to={`/books/${book.id}`} className="book__title--link">
                    {book.title}
                </Link>
            </div>

            {/* BOOK RATING */}
            <Rating rating={book.rating} />

            {/* BOOK PRICE */}
            <Price salePrice={book.salePrice} originalPrice={book.originalPrice} />
        </div>
    )
}
