import React, { useState } from 'react'
import { GifGrid } from './components/GifGrid';
import { AddCategory } from './components/AddCategory';





export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon ball']);

    return (
        <>
            <h2>Gif App</h2>
            <hr></hr>
            <AddCategory setCategories = {setCategories}/>
            {/* //<button onClick = {handleAdd}>Agregar</button> */}
            <ol>
            {
                categories.map(category =>(
                   <GifGrid 
                        key={category}
                        category={category}/>
                ))
            }
            </ol>
        </>
    )
}

