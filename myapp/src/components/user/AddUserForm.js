import React, { useState } from "react";
import { addUser } from "./userSlice";
import {useDispatch} from "react-redux"
import './AddUserForm.css'

const AddUserForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const dispatch=useDispatch()
  const handleSubmit=(e)=>{
    e.preventDefault()

    const newUser={
        id:Date.now(),
        email,
        first_name:firstName,
        last_name:lastName,
        avatar:avatar|| "No image"
    }
    dispatch(addUser(newUser))

  }
  return (
    <form className="add-user-form" onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          value={firstName}
          className="input-field"
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          value={lastName}
          className="input-field"
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          value={email}
          className="input-field"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
       Avatar URL:
        <input
          type="text"
          value={avatar}
          className="input-field"
          onChange={(e) => setAvatar(e.target.value)}
          required
        />
      </label>
      <button type="submit" className="submit-btn">Add User</button>
    </form>
  );
};

export default AddUserForm;
