import { useState } from 'react';

interface IAddCategory {
    onNewCategory:(newCategory:string) => void
}

export const AddCategory = ({ onNewCategory}:IAddCategory) => {
    // Cada componente puede tener su propio estado
    const [inputValue, setInputValue] = useState<string>('');
    
    const onInputChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setInputValue(event.target.value)
    }

    const onSubmit = (event:React.ChangeEvent<HTMLFormElement>) => {
        // Metodo para que no recarge el navegador
        event.preventDefault();
        const value:string = inputValue.trim();
        if(value.length<= 1) return;
        // Aadd category si hacemos un call back podemos obtener el arreglo
        // onNewCategory(category => ([...category,inputValue]))
        onNewCategory(value)
        setInputValue('');
    }
  return (
        <>
        <form onSubmit={onSubmit}>
            <input 
                type="text"
                placeholder="Buscar Gifs" 
                value={inputValue}
                // Siempre se envia el event
                // Donde podemos interactuar 
                onChange={onInputChange}
                />
        </form>
        
        </>
    )
}
