import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Album from '../components/ui/Album'
import Price from '../components/ui/Price'
import Rating from '../components/ui/Rating'

export default function BookInfo({ albums, addToCart, cart }) {
    const { id } = useParams()
    const album = albums.find((album) => +album.id === +id)

    function addBookToCart(album) {
        addToCart(album)
    }

    function bookExistsOnCart() {
        return cart.find((album) => album.id === +id)
    }

    return (
        <div id="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        {/* BACK BUTTON TO GO TO LIST OF BOOKS */}
                        <div className="book__selected--top">
                            <Link to="/albums" className="book__link">
                                <FontAwesomeIcon icon="arrow-left" />
                            </Link>
                            <Link to="/albums" className="book__link">
                                <h2 className="book__selected--title--top">Albums</h2>
                            </Link>
                        </div>

                        {/* CURRENTLY SELECTED BOOK */}
                        <div className="book__selected">
                            {/* BOOK IMAGE */}
                            <figure className="book__selected--figure">
                                <img src={album.url} alt="" className="book__selected--img" />
                            </figure>

                            {/* BOOK DESCRIPTION */}
                            <div className="book__selected--description">
                                {/* BOOK TITLE */}
                                <h2 className="book__selected--title">{album.title}</h2>
                                {/* BOOK RATING */}
                                <Rating rating={album.rating} />
                                {/* BOOK PRICE */}
                                <div className="book__selected--price">
                                    <Price salePrice={album.salePrice} originalPrice={album.originalPrice} />
                                </div>

                                {/* BOOK SUMMARY */}
                                <div className="book__summary">
                                    <h3 className="book__summary--title">Summary</h3>
                                    <p className="book__summary--para">{album.summary}</p>
                                    <h3 className="book__summary--title">Details</h3>
                                    <p className="book__summary--para">
                                        Release Year: {album.year} {album.songs} - {album.duration}{' '}
                                    </p>

                                    {/* ADD TO CART / CHECKOUT BUTTON */}
                                    {bookExistsOnCart() ? (
                                        <Link to={`/cart`} className="book__link">
                                            <button className="btn">Checkout</button>
                                        </Link>
                                    ) : (
                                        <button className="btn" onClick={() => addBookToCart(album)}>
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
                            <h2 className="book__selected--title--top">Recommended Albums</h2>
                        </div>

                        <div className="albums">
                            {albums
                                .filter((album) => album.rating >= 4.5 && +album.id !== +id)
                                .slice(0, 4)
                                .map((album) => (
                                    <Album album={album} key={album.id} />
                                ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
