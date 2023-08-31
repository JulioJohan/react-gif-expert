import { useState } from "react"
import { AddCategory,GifGrid } from './components';

export const GiftExpertApp = () => {

  const [categories, setCategories] = useState<string[]>(['One Punch'])
  const onAddCategory = (newCategory:string) =>{
    if(categories.includes(newCategory)) return;
    
    // ...categories Tomamos todas las categorios = copia
    // despues ponemos el valor que nosotros deseamos
    setCategories([newCategory,...categories]);
    // setCategories([...categories,'Valorant'])
    // setCategories(categories);
  }

  return (
    <>
      {/* Titulo */}
      <h1>GiftExpertApp</h1>
      {/* <input */}
      <AddCategory 
        // onAddCategory = {setCategories}
        onNewCategory = { (event:string) => onAddCategory(event)}  
      />

        {categories.map(category =>(
            <GifGrid key={category}
                     category = {category}
          />           
          ))
        }
 
      {/* Item */}
    </>
  )
}
