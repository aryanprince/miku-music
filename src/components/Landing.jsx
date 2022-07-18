import React from 'react'
import { Link } from 'react-router-dom'

import UndrawBooks from '../assets/Undraw_Books.svg'

export default function Landing() {
    return (
        <section id="landing">
            <header>
                <div className="header__container">
                    {/* HEADER DESCRIPTION ON HOMEPAGE */}
                    <div className="header__description">
                        <h1>UK's most awarded online library platform</h1>
                        <h2>
                            Find you dream book with <span className="purple">Library</span>
                        </h2>
                        <Link to="#features">
                            <button className="btn">Browse books</button>
                        </Link>
                    </div>

                    {/* HEADER IMAGE (SVG) ON HOMEPAGE */}
                    <figure className="header__img--wrapper">
                        <img src={UndrawBooks} alt="" />
                    </figure>
                </div>
            </header>
        </section>
    )
}
