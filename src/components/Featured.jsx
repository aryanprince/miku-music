import React from 'react'

import { books } from '../data'

import Book from './ui/Book'

export default function Featured() {
    return (
        // Maybe change featured to features
        <section id="featured">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Featured <span className="purple">Books</span>
                    </h2>

                    <div className="books">
                        {books
                            .filter((book) => book.rating === 5)
                            .slice(0, 4)
                            .map((book) => (
                                <Book book={book} key={book.id}/>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
