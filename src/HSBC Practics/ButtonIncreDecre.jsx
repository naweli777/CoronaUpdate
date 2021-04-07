import React, { useState } from "react";
import axios from "axios";

const ButtonIncreDecre = () => {
  const [count, setCount] = useState(1);
  const [user, setUser] = useState([]);

  const handleIncre = async () => {
    try {
      setCount(count + 1);
      const data = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${count}`
      );
      setUser(data.data);
      console.log(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDecre = async () => {
    if (count !== 0) {
      setCount(count - 1);
      const data = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${count}`
      );
      setUser(data.data);
      console.log(data.data);
    }
  };

  return (
    <>
      <button onClick={() => handleIncre()}>Increment </button>
      <h1>{count}</h1>
      <p>{user.name}</p>
      <p>{(user.username, user.email)}</p>
      <button onClick={() => handleDecre()}>Decrement </button>
    </>
  );
};
export default ButtonIncreDecre;
