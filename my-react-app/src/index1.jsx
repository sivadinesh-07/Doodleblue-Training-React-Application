import React from "react";
import { useState, useEffect } from "react";
function App() {
    const [form, setForm] = useState({
        firstName: "", email: "", age: "",
    });
    const [submitted,setSubmitted]=useState(false)
    const handle = (e) => {
        console.log(e, "event")
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }
    const handleSubmit=(e)=>
    {
        // e.preventDefault()
        setSubmitted(true)
    }

    return (
        <div>
            <input name="firstName" value={form.firstName} onChange={handle} />
            <br />
            <br />
            <input name="email" value={form.email} onChange={handle} />
            <br />
            <br />
            <input name="age" value={form.age} onChange={handle} />
            <br />
            <br />

            <button type="submit" onClick={handleSubmit}>submit</button>
            <br />
            <br />
            {submitted?(
                <div className="cont">
                <label htmlFor="">name: {form.firstName}</label>
                <br />
                <label htmlFor="">email: {form.email}</label>
                <br />
                <label htmlFor="">age: {form.age}</label>
            </div>):(
                <div>
                    <h1>please fill the details</h1>
                </div>
            )
            }
            




        </div>

    )
}
export default App
