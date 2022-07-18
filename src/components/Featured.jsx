import React from 'react'

import { books } from '../data'
import Book from './ui/Book'

export default function Featured() {
    return (
        <section id="featured">
            <div className="container">
                <div className="row">
                    {/* HEADER FOR FEATURED 4 BOOKS */}
                    <h2 className="section__title">
                        Featured <span className="purple">Albums</span>
                    </h2>

                    {/* DISPLAYS THE ACTUAL 4 FEATURED BOOKS */}
                    <div className="books">
                        {books
                            .filter((book) => book.rating === 5)
                            .slice(0, 4)
                            .map((book) => (
                                <Book book={book} key={book.id} />
                            ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
