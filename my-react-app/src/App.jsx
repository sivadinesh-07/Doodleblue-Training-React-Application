
import react, { useEffect, useState } from 'react';
import backgroundImage from './assets/image.jpg'
import Button from './component/UI/button/index.jsx'
const app=()=>{
  
  const[data,setData]=useState([]);
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
        data.push(e)
          e.preventDefault()
          setSubmitted(true)
      }
  
  useEffect(()=>
  {
    const fetchdata=async()=>{
      const res=await fetch('https://jsonplaceholder.typicode.com/users')
      const data=await res.json();
      setData(data)
    }
    fetchdata();
  },[])

  console.log(data,"data")
  return(

    <div className='main'>
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

        

      {data?.map((items,key)=>
      {
        return(
            

          <div className="container" key={key}>
            <label className='lab'>name : </label>

            <br />
            <h4>{items.name}</h4>

             <label className='lab'>user name : </label>
             <br />
             <h4>{items.username}</h4>

            <label className='lab'>email :</label>
             <br />

            <h4>{items.email}</h4>
            <label className='lab'>phone :</label>
             <br />

            <h4>{items.phone}</h4>
            <label className='lab'>address :</label>
             <br />

            <h4>{items.address.street}</h4>
            <h4>{items.address.suite}</h4>
            <h4>{items.address.city}</h4>
            <h4>{items.address.zipcode}</h4>
            <label className='lab'>website :</label>
             <br />

            <h4>{items.website}</h4>
            <label className='lab'>company :</label>
             <br />

            <h4>{items.company.name}</h4>
            <h4>{items.company.catchPhrase}</h4>
            <h4>{items.company.bs}</h4>
          </div>
        )
      })}
    </div>
  )
}

// import { useState } from "react";
// import title from './component/UI/titlle/Title.JSX'
// function App()
// {
//   const[count,setcount]=useState(0);
//   return(
//     <>
//     <title count={count}>
//       <button onClick={()=>setcount(count+1)}>
//         click me
//       </button>
//     </title>
//     </>
//   )
// }
// export default App


// import { useState } from "react";
// import Title from "./component/UI/titlle/Title";

// function App() {
//     const [count, setCount] = useState(0);

//     return (
//         <>
//             <Title count={count} />

//             <button onClick={() => setCount(count + 1)}>
//                 Click me
//             </button>
//         </>
//     );
// }

export default app;
