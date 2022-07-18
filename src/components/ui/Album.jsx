import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Price from './Price'
import Rating from './Rating'

export default function Album({ album }) {
    const [img, setImg] = useState()

    useEffect(() => {
        let mounted = true
        const image = new Image()
        image.src = album.url
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
        <div className="album">
            {img ? (
                <>
                    {/* ALBUM ART */}
                    <Link to={`/albums/${album.id}`}>
                        <figure className="book_img-wrapper">
                            <img src={img.src} alt="" className="book__img" />
                        </figure>
                    </Link>

                    {/* ALBUM TITLE */}
                    <div className="book__title">
                        <Link to={`/albums/${album.id}`} className="book__title--link">
                            {album.title}
                        </Link>
                    </div>

                    {/* ALBUM ARTIST */}
                    <div className="book__artist">
                        <Link to={`/albums/${album.id}`} className="book__artist--link">
                            {album.artist}
                        </Link>
                    </div>

                    {/* ALBUM RATING */}
                    <Rating rating={album.rating} />

                    {/* ALBUM PRICE */}
                    <Price salePrice={album.salePrice} originalPrice={album.originalPrice} />
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
