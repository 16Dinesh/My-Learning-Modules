import { useState } from "react";

const data = {
  username: "",
  email: "",
  password: "",
};

export default function Form() {
  const [formData, SetFormData] = useState(data);

  function handleChange(e) {
    // console.log(e.target.value)
    SetFormData({...formData, [e.target.name]: e.target.value});
  }

  function handleSubmit(e) {
    // console.log(e.target.value);
    console.log(`Submitted: ${formData.username}, ${formData.email}, ${formData.password}`);
    e.preventDefault()
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          type="text"
          value={formData.username}
          placeholder="Enter YourText"
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          value={formData.email}
          placeholder="Enter YourEmail"
          onChange={handleChange}
        />
        <input
          value={formData.password}
          name="password"
          type="password"
          placeholder="Enter Your Password"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
