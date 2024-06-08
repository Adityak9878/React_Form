import { useState } from "react"
import ShoppingListForm from "./ShoppingListForm";
import { v4 as uuid } from "uuid";


export default function ShoppingList(){

    const [items,setItems] = useState([{id:uuid(),product:"Bnana",quantity:3},
                        {id:uuid(),product:"Apple",quantity:7}]);
   
    const addItem = (item) =>{
        setItems((currItem)=>{
            return [...currItem,{...item,id:uuid()}]
        });
    }
    return(
        <>
            <h1>Shopping List</h1>
           <ul>
                {items.map((i)=>
                    <li key={i.id}>{i.product} - <b>{i.quantity}</b></li>
                )}
            </ul> 
            
            < ShoppingListForm addItem={addItem}/>
        </>
    )
}