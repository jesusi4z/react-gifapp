import React from 'react'

export const GifGridItem = ({imagen}) => {
    return (
        <div className="card animate__animated animate__fadeIn">
            
            <img src = {imagen.url} 
                alt={imagen.title}></img>
                <div>
                    <li>
                            <p>{imagen.title}</p>
                            <p>Size: {parseInt(Number(imagen.size)/1024)}Kb</p>
                            <p>Frames: {imagen.frames}</p>
                    </li>
                </div>
        </div>
    )
}
