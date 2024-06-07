import { useState } from "react"

export default function BetterSignUP() {
    const [formData, setFormData] = useState({ firstname: "", lastname: "",password:"" });

    const handleChange = (evt) => {
        const Field = evt.target.name;
        const val = evt.target.value;
        setFormData((currData) => {
            currData[Field] = val;
            return { ...currData };
        });
    }
    const hadnleSubmit = () => {
        console.log(formData);
    }

    return (
        <>
            <div>
                <label htmlFor="user"> UserName   </label>
                <input style={{ size: "50px" }}
                    type="text" onChange={handleChange}
                    name="firstname"
                    placeholder="Enter Name" id="user"
                    value={formData.firstname} />
                <label htmlFor="lastname"> Lastname   </label>
                <input style={{ size: "50px" }}
                    type="text" onChange={handleChange}
                    name="lastname"
                    id="lastname"
                    value={formData.lastname} />
                <label htmlFor="pass"> Password   </label>
                <input style={{ size: "50px" }}
                    type="password" onChange={handleChange}
                    name="password"
                    id="pass"
                    value={formData.password} />    

            </div>
            <button onClick={hadnleSubmit}>Submit</button>
        </>
    )
}