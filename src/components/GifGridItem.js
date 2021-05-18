import React from 'react'

export const GifGridItem = ({imagen}) => {

    return (
        <div className="card animate__animated animate__fadeIn">
            
            <img src = {imagen.url} 
                alt={imagen.title}></img>
                <p>{imagen.title}</p>
        </div>
    )
}
