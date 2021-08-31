import React from 'react'
import './Banner.css'
import {imageUrl} from '../../constants/constants'

function Banner({info}) {
    return (
        <div
        style={ {backgroundImage:`url(${imageUrl + info.backdrop_path})`}}
        className="banner">
            <div className="content">
                <h1 className="title">{info.title}</h1>
                <div className="banner-buttons">
                    <button className="button">Play</button>
                    <button className="button">My List</button>
                </div>
                <h1 className="description">{info.overview}</h1>

            </div>
            <div className="fade"></div>
        </div>
    )
}

export default Banner
