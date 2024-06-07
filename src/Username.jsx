// HhtmlFor used is here for labelling....


import { useState } from "react"

export default function Username(){
    const [username,setUsername]=useState("");
    const updateUsername = (evt) =>{
        setUsername(evt.target.value)
    }
    return (
        <>
            <label htmlFor="user">Enter UserName</label>
            <input style={{size:"50px"}}  
            type="text" onChange={updateUsername}
            placeholder="Enter Name" id="user"
            value={username}/>
            <button>Submit</button>
        </>
    )
}