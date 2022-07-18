import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Highlight from './ui/Highlight'

export default function Highlights() {
    return (
        <section id="highlights">
            <div className="container">
                <div className="row">
                    {/* HOMEPAGE HIGHLIGHTS */}
                    <h2 className="section__title">
                        Why choose <span className="purple">Muki Music</span>
                    </h2>

                    {/* INDIVIDUAL COMPONENTS USED TO HIGHLIGHT FEATURES */}
                    <div className="highlight__wrapper">
                        <Highlight icon={<FontAwesomeIcon icon="bolt" />} title="Easy and Quick" para="Get access to the books you purchased online instantly." />
                        <Highlight icon={<FontAwesomeIcon icon="book-open" />} title="10,000+ Books" para="Library has books in all your favourite categories." />
                        <Highlight icon={<FontAwesomeIcon icon="tags" />} title="Affordable" para="Get your hands on popular books for as little as $10." />
                    </div>
                </div>
            </div>
        </section>
    )
}
