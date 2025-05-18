import React, { useState } from "react";

const Yamuna = () => {
  const [studentdetails, studentupdate] = useState({
    fname: "",
    lname: "",
    email: ""
  });

  const [allUsers, setAllUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const newstd = { ...studentdetails };
    newstd[e.target.name] = e.target.value;
    studentupdate(newstd);
  };

  const addUser = () => {
    if (editIndex === null) {
      setAllUsers([...allUsers, studentdetails]);
    } else {
      const updatedUsers = [...allUsers];
      updatedUsers[editIndex] = studentdetails;
      setAllUsers(updatedUsers);
      setEditIndex(null);
    }
    studentupdate({ fname: "", lname: "", email: "" });
  };

  const handleEdit = (index) => {
    const selectedUser = allUsers[index];
    studentupdate(selectedUser);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const filteredUsers = allUsers.filter((_, i) => i !== index);
    setAllUsers(filteredUsers);
    if (editIndex === index) {
      studentupdate({ fname: "", lname: "", email: "" });
      setEditIndex(null);
    }
  };

  return (
    <>
      <h1>Welcome to Users Component</h1>
      <form>
        <label>First Name: </label>
        <input
          type="text"
          name="fname"
          value={studentdetails.fname}
          onChange={handleChange}
        />
        <br />

        <label>Last Name: </label>
        <input
          type="text"name="lname"value={studentdetails.lname}onChange={handleChange}/>
        <br />

        <label>Email: </label>
        <input
          type="text"
          name="email"
          value={studentdetails.email}
          onChange={handleChange}
        />
        <br />

        <button type="button" onClick={addUser}>
          {editIndex === null ? "Add User" : "Update User"}
        </button>
      </form>

      {allUsers.length > 0 && (
        <table border="1" style={{ marginTop: "20px", width: "100%" }}>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map((user, index) => (
              <tr key={index}>
                <td>{user.fname}</td>
                <td>{user.lname}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => handleEdit(index)}>Edit</button>{" "}
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Yamuna;
