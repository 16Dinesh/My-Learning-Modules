import React, { useState } from "react";

const User = () => {
  const [usersList, setUsersList] = useState([]);
  const [pending, setPending] = useState(false);

  async function fetchAllUsers() {
    try {
      setPending(true);
      const apiResponse = await fetch("http://dummyjson.com/users");
      const result = await apiResponse.json();

      if (result?.users) {
        setUsersList(result?.users.slice(0, 4));
        setPending(false);
      } else {
        setUsersList([]);
        setPending(false);
      }

      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  console.log(usersList);

  if (pending) return <h1>Fetching users! Please wait</h1>;
  return (
    <div>
      <h2>All Users Lists</h2>
      <h4>Basic Data fetching</h4>
      <button onClick={fetchAllUsers}>Fetch Users List</button>
      <ul>
        {usersList && usersList.length > 0 ? (
          usersList.map((userItem) => (
            <li key={userItem?.id}>
              <p>
                {userItem?.firstName} {userItem?.lastName}
              </p>
            </li>
          ))
        ) : (
          <h1>No users found! Please try again.</h1>
        )}
      </ul>
    </div>
  );
};

export default User;
