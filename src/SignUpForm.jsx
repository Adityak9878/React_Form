// Here We are Using Seperate Handlers for Seperate States like useState user n pass for 
// both
// differeent is being used but same could also be used.


import { useState } from "react"

export default function SignUpForm() {
    const [username, setUsername] = useState("");
    const [password,setPassword] = useState("");
    const updateUsername = (evt) => {
        setUsername(evt.target.value)
    }
    const updatePassword = (evt) =>{
        setPassword(evt.target.value)
        console.log(evt.target.value);
    }

    const hadnleSubmit = () => {
        console.log(username,password);
    }

    return (
        <>
            <div>
                <label htmlFor="user"> UserName   </label>
                <input style={{ size: "50px" }}
                    type="text" onChange={updateUsername}
                    placeholder="Enter Name" id="user"
                    value={username} />
                    <label htmlFor="pass"> Password   </label>
                <input style={{ size: "50px" }}
                    type="password" onChange={updatePassword}
                    id="pass"
                    value={password} />
                
            </div>
            <button onClick={hadnleSubmit}>Submit</button>
        </>
    )
}