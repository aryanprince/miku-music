import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Book from '../components/ui/Book'
import Price from '../components/ui/Price'
import Rating from '../components/ui/Rating'

export default function BookInfo({ books, addToCart, cart }) {
    const { id } = useParams()
    const book = books.find((book) => +book.id === +id)

    function addBookToCart(book) {
        addToCart(book)
    }

    function bookExistsOnCart() {
        return cart.find((book) => book.id === +id)
    }

    return (
        <div id="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        {/* BACK BUTTON TO GO TO LIST OF BOOKS */}
                        <div className="book__selected--top">
                            <Link to="/books" className="book__link">
                                <FontAwesomeIcon icon="arrow-left" />
                            </Link>
                            <Link to="/books" className="book__link">
                                <h2 className="book__selected--title--top">Books</h2>
                            </Link>
                        </div>

                        {/* CURRENTLY SELECTED BOOK */}
                        <div className="book__selected">
                            {/* BOOK IMAGE */}
                            <figure className="book__selected--figure">
                                <img src={book.url} alt="" className="book__selected--img" />
                            </figure>

                            {/* BOOK DESCRIPTION */}
                            <div className="book__selected--description">
                                {/* BOOK TITLE */}
                                <h2 className="book__selected--title">{book.title}</h2>
                                {/* BOOK RATING */}
                                <Rating rating={book.rating} />
                                {/* BOOK PRICE */}
                                <div className="book__selected--price">
                                    <Price salePrice={book.salePrice} originalPrice={book.originalPrice} />
                                </div>

                                {/* BOOK SUMMARY */}
                                <div className="book__summary">
                                    <h3 className="book__summary--title">Summary</h3>
                                    <p className="book__summary--para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vel voluptates mollitia adipisci hic commodi id alias obcaecati, provident quasi sequi nam!
                                        Numquam, obcaecati in nobis assumenda sed officia ducimus.
                                    </p>
                                    <p className="book__summary--para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vel voluptates mollitia adipisci hic commodi id alias obcaecati, provident quasi sequi nam!
                                        Numquam, obcaecati in nobis assumenda sed officia ducimus.
                                    </p>

                                    {/* ADD TO CART / CHECKOUT BUTTON */}
                                    {bookExistsOnCart() ? (
                                        <Link to={`/cart`} className="book__link">
                                            <button className="btn">Checkout</button>
                                        </Link>
                                    ) : (
                                        <button className="btn" onClick={() => addBookToCart(book)}>
                                            Add to Cart
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ADDITIONAL RECOMMENDED BOOKS */}
                <div className="book__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <h2 className="book__selected--title--top">Recommended Books</h2>
                        </div>

                        <div className="books">
                            {books
                                .filter((book) => book.rating === 5 && +book.id !== +id)
                                .slice(0, 4)
                                .map((book) => (
                                    <Book book={book} key={book.id} />
                                ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
