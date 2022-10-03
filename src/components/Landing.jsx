import React from 'react'
import { Link } from 'react-router-dom'

import UndrawMusic from '../assets/Undraw_Music.svg'

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
                        <Link to="/albums">
                            <button className="btn">Browse albums</button>
                        </Link>
                    </div>

                    {/* HEADER IMAGE (SVG) ON HOMEPAGE */}
                    <figure className="header__img--wrapper">
                        <img src={UndrawMusic} alt="" />
                    </figure>
                </div>
            </header>
        </section>
    )
}
