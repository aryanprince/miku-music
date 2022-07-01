import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Book({ book }) {
    return (
        <div className="book">
            {/* ------- BOOK IMAGE */}
            <Link to="">
                <figure className="book_img-wrapper">
                    <img src={book.url} alt="" />
                </figure>
            </Link>

            {/* ------- BOOK TITLE */}
            <div className="book__title">
                <Link to="/" className="book__title--link">
                    {book.title}
                </Link>
            </div>

            {/* ------- BOOK RATINGS */}
            <div className="book__ratings">
                {new Array(Math.floor(book.rating)).fill(0).map((_, index) => (
                    <FontAwesomeIcon icon="star" key={index} />
                ))}

                {!Number.isInteger(book.rating) && <FontAwesomeIcon icon="star-half-alt" />}
            </div>

            {/* ------- BOOK PRICE */}
            <div className="book__price">
                {book.salePrice ? (
                    <>
                        <span className="book__price--normal">${book.originalPrice.toFixed(2)}</span>${book.salePrice.toFixed(2)}
                    </>
                ) : (
                    <>${book.originalPrice.toFixed(2)}</>
                )}
            </div>
        </div>
    )
}
