import React from 'react'

export default function Explore() {
    return (
        <section id="explore">
            <div className="container">
                <div className="row row__column">
                    <h2>
                        Explore more <span className="purple">books</span>
                    </h2>
                    <a href="/books">
                        <button className="btn">Explore books</button>
                    </a>
                </div>
            </div>
        </section>
    )
}
