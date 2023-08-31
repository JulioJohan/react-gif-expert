
interface GifItem{
    title:string;
    url:string;    
}

export const GifItem = ({title,url}:GifItem) => {
  return (
        <>
            <div className="card">
                <img src={url} alt={title} />
                <p>{title}</p>
            </div>
        </>
    )
}
