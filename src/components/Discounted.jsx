import React from 'react'
import { albums } from '../data'
import Album from './ui/Album'

export default function Discounted() {
    return (
        <section id="recent">
            <div className="container">
                <div className="row">
                    {/* TITLE FOR THE DISCOUNTED BOOKS */}
                    <h2 className="section__title">
                        Discounted <span className="purple">Albums</span>
                    </h2>

                    {/* ACTUAL DISCOUNTED BOOKS */}
                    <div className="albums">
                        {albums
                            .filter((album) => album.salePrice > 0)
                            .slice(0, 8)
                            .map((album) => (
                                <Album album={album} key={album.id} />
                            ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
