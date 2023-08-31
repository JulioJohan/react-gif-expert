import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFethGifs = (category:string) => {
    const [images, setImages] = useState([]);
    const [isLoading,setIsLoading] = useState(true);

    const getImages = async() =>{
        const images = await getGifs(category);
        setImages(images);
        setIsLoading(false);
    }

    // el primero argumento es lo que queremos ejecutar
    useEffect(()=>{
        getImages();
    // Las llaves son las dependecias si pongo un arreglo vacio se ejecutara una vez
    },[]);
    
    return {
        images,
        isLoading
    }
}
