import React from 'react'
import { Link } from 'react-router-dom'

export default function Explore() {
    return (
        <section id="explore">
            <div className="container">
                <div className="row row__column">
                    {/* HEADING FOR EXPLORING MORE BOOKS */}
                    <h2>
                        Explore more <span className="purple">albums</span>
                    </h2>

                    {/* THE ACTUAL BUTTON TO HYPERLINK TO MORE BOOKS */}
                    <Link to="/albums">
                        <button className="btn">Explore albums</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
