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
                        <h1>UK's flagship record store</h1>
                        <h2>
                            Find your dream album with <span className="purple">Muki Music</span>
                        </h2>
                        <Link to="#features">
                            <button className="btn">Browse albums</button>
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
