import React, { useState } from 'react'
import Album from '../components/ui/Album'

export default function Albums({ albums: initialBooks }) {
    const [albums, setBooks] = useState(initialBooks)

    function filterBooks(filter) {
        if (filter === 'LOW_TO_HIGH') {
            setBooks(albums.slice().sort((a, b) => (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice)))
        }

        if (filter === 'HIGH_TO_LOW') {
            setBooks(albums.slice().sort((a, b) => (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice)))
        }

        if (filter === 'RATING') {
            setBooks(albums.slice().sort((a, b) => b.rating - a.rating))
        }
    }

    return (
        <div id="books__body">
            <main id="books__main">
                <section>
                    <div className="books__container">
                        <div className="row">
                            <div className="books__header">
                                <h2 className="section__title books__header--title">All Albums</h2>
                                <select id="filter" defaultValue="DEFAULT" onChange={(event) => filterBooks(event.target.value)}>
                                    <option value="DEFAULT" disabled>
                                        Sort
                                    </option>
                                    <option value="LOW_TO_HIGH">Price, Low to High</option>
                                    <option value="HIGH_TO_LOW">Price, High to Low</option>
                                    <option value="RATING">Rating</option>
                                </select>
                            </div>

                            <div className="albums">
                                {albums.map((album) => (
                                    <Album album={album} key={album.id} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
