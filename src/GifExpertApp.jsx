import React from 'react';
import { useState} from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Goku'])

    const onAddCategory = (newCategory) => {
        //console.log(newCategory);
        //categories.push(newCategory);

        if( categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
        //setCategories(cat => [ 'Valorant', ...categories]);
    }

    //console.log(categories);
  return (
    <>
        <h1>Gif Expert App</h1>

        <AddCategory 
            //setCategories={setCategories} 
            onNewCategory={ value => onAddCategory(value) }  />

            { 
                categories.map( (category, index ) => ( 
                    <GifGrid key={category} category={category}/> 
                )) 
            }

    </>
  )
}
