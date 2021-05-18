
export const getGifs  = async(category) =>{

    const apiKey = 'KKTCZmY4kBn5zXy8XgReLMr2ZtWuQlqu';
    const resp = await fetch(`http://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(category)}&api_key=${apiKey}`);
    
    const {data} = await resp.json();
  
    const gifs = data.map( imagen =>{
        console.log(imagen);
        return{
            id:imagen.id,
            title:imagen.title,
            url:imagen.images?.original.url,
            size:imagen.images?.original.size,
            frames:imagen.images?.original.frames
        }
    })


    return gifs;
}