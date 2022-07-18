import React from 'react'

import { albums } from '../data'
import Album from './ui/Album'

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
                    <div className="albums">
                        {albums
                            .filter((album) => album.rating === 5)
                            .slice(0, 4)
                            .map((album) => (
                                <Album album={album} key={album.id} />
                            ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
