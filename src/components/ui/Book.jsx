import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Price from './Price'
import Rating from './Rating'

export default function Book({ book }) {
    const [img, setImg] = useState()

    useEffect(() => {
        let mounted = true
        const image = new Image()
        image.src = book.url
        image.onload = () => {
            setTimeout(() => {
                if (mounted) {
                    setImg(image)
                }
            }, 300)
        }
        return () => {
            //When the component unmounts
            mounted = false
        }
    })

    return (
        <div className="book">
            {img ? (
                <>
                    {/* ALBUM ART */}
                    <Link to={`/books/${book.id}`}>
                        <figure className="book_img-wrapper">
                            <img src={img.src} alt="" className="book__img" />
                        </figure>
                    </Link>

                    {/* ALBUM TITLE */}
                    <div className="book__title">
                        <Link to={`/books/${book.id}`} className="book__title--link">
                            {book.title}
                        </Link>
                    </div>

                    {/* ALBUM ARTIST */}
                    <div className="book__artist">
                        <Link to={`/books/${book.id}`} className="book__artist--link">
                            {book.artist}
                        </Link>
                    </div>

                    {/* ALBUM RATING */}
                    <Rating rating={book.rating} />

                    {/* ALBUM PRICE */}
                    <Price salePrice={book.salePrice} originalPrice={book.originalPrice} />
                </>
            ) : (
                <>
                    <div className="book__img--skeleton"></div>
                    <div className="skeleton book__title--skeleton"></div>
                    <div className="skeleton book__rating--skeleton"></div>
                    <div className="skeleton book__price--skeleton"></div>
                </>
            )}
        </div>
    )
}
