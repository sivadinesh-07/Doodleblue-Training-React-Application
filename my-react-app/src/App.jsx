
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  const [form, setForm] = useState({
    firstName: "",
    email: "",
    phone: "",
    address: "",
    website: "",
    company: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handle = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = {
      id: Date.now(),
      name: form.firstName,
      username: "",
      email: form.email,
      phone: form.phone,
      address: {
        street: form.address,
        suite: "",
        city: "",
        zipcode: ""
      },
      website: form.website,
      company: {
        name: form.company,
        catchPhrase: "",
        bs: ""
      }
    };

    setData((prev) => [...prev, newRecord]);
    setSubmitted(true);
  };

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );

        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchdata();
  }, []);

  console.log(data, "data");

  return (
    <div className="main">
      <div>
        Name:
        <input
          name="firstName"
          value={form.firstName}
          onChange={handle}
        />
        <br /><br />

        Email:
        <input
          name="email"
          value={form.email}
          onChange={handle}
        />
        <br /><br />

        Phone:
        <input
          name="phone"
          value={form.phone}
          onChange={handle}
        />
        <br /><br />

        Address:
        <input
          name="address"
          value={form.address}
          onChange={handle}
        />
        <br /><br />

        Website:
        <input
          name="website"
          value={form.website}
          onChange={handle}
        />
        <br /><br />

        Company:
        <input
          name="company"
          value={form.company}
          onChange={handle}
        />
        <br /><br />

        <button type="button" onClick={handleSubmit}>
          Submit
        </button>

        {submitted && <h3>Record added successfully!</h3>}
      </div>

      {data.map((items) => (
        <div className="container" key={items.id}>
          <label className="lab">Name:</label>
          <br />
          <h4>{items.name}</h4>

          <label className="lab">Username:</label>
          <br />
          <h4>{items.username}</h4>

          <label className="lab">Email:</label>
          <br />
          <h4>{items.email}</h4>

          <label className="lab">Phone:</label>
          <br />
          <h4>{items.phone}</h4>

          <label className="lab">Address:</label>
          <br />
          <h4>{items.address.street}</h4>
          <h4>{items.address.suite}</h4>
          <h4>{items.address.city}</h4>
          <h4>{items.address.zipcode}</h4>

          <label className="lab">Website:</label>
          <br />
          <h4>{items.website}</h4>

          <label className="lab">Company:</label>
          <br />
          <h4>{items.company.name}</h4>
          <h4>{items.company.catchPhrase}</h4>
          <h4>{items.company.bs}</h4>
        </div>
      ))}
    </div>
  );
}

export default App;

