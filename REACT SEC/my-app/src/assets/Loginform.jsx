import React, { useState } from "react"; // Added useState import
import { useForm } from "react-hook-form";

function Loginform() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [usermail, setUsermail] = useState("");
  const [username, setUsername] = useState(""); // Added state for username

  // Create a single function to handle the successful submission
  const onSubmit = (data) => {
    console.log(data);
    setUsermail(data.email); // Set the email to state here
    setUsername(data.username); // Set the username to state here

  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>

<label>Enter username</label>
        <input 
          type="text" 
          {...register("username", { required: true })} 
        />
        {errors.username && <p style={{color: "red"}}>Username is required</p>}

        <br />


        <label>Enter Email</label>
        <input 
          type="email" 
          {...register("email", { required: true, pattern: /^\S+@\S+$/ })} 
        />
        {errors.email && <p style={{color: "red"}}>Email is required and should be in correct format</p>}
        
        <br />
        
        <label>Enter Password</label>
        <input 
          type="password" 
          {...register("password", { required: true })} 
        />
        {errors.password && <p style={{color: "red"}}>Password is required</p>}
        
        <br />
        <button type="submit">Login</button>
      </form>

      <h1>Welcome {usermail}</h1>
      <h2>Your username is: {username}</h2>
    </>
  );
}

export default Loginform;
