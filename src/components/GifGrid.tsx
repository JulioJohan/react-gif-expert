
import { GifItem } from './Giftem';
import { useFethGifs } from '../hooks/useFethGifs';


interface GifGrid {
    category: string
}



export const GifGrid = ({ category }: GifGrid) => {

    const {images,isLoading} = useFethGifs(category);  

    return (
        <>
            <h1>{category}</h1>
            {
                isLoading && (<h2>Cargando...</h2>)        
            }
            <div className='card-grid'>
            {
                images.map((img:any)=>(
                    <GifItem key={img.id}
                    // Podemos acceder a todos esto es recomendable cuando
                    // los props se envian con muchas cantidades
                    {...img}
                    // title={title}
                    // url={url}
                    />
                ))
            }
            </div>
        </>
    )
}
