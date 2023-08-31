
export const getGifs = async(category:string) =>{
    const url:string = `https://api.giphy.com/v1/gifs/search?api_key=OT8Cw3FwuMub60xaOU23xocOrOfK7QLa&q=${category}&limit=20`;
    const respuesta = await fetch(url);
    const {data = []} = await respuesta.json();
    // Creando un nuevo objeto y extrayecndo lo que deseamos de la información
    const gifs = data.map((img:any) =>({
        id:img.id,
        title:img.title,
        url:img.images.downsized_medium.url            
    }))
    console.log(gifs);
    return gifs;
}