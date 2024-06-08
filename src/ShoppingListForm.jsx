import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function ShoppingListForm({addItem}){
    const [formData,setFormData] = useState({product:"",quantity:0});
    const changeData = (evt) =>{
        setFormData((currData)=>{
            return {
                ...currData,
                [evt.target.name]:evt.target.value
            };
        });
    }

    const handleSubmit = (evt) =>{
        evt.preventDefault();
        addItem(formData)
        setFormData({product:"",quantity:0})
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>Product : {formData.product}</h1>
            <label htmlFor="product_name">Enter Product Name </label>
            <input type="text" placeholder="Product Name" id="product_name" name="product" 
            value={formData.product} onChange={changeData}/>
            <label htmlFor="product_quantity">Enter Quantity </label>
            <input type="number" placeholder="1" id="product_quantity" name="quantity" 
            value={formData.quantity} onChange={changeData}/>
            <button type="submit">Add Item</button>
        </form>
    )
}