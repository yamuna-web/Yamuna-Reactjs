import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserAction, deleteUserAction, updateUserAction } from "../Store/StudentsSlice";

// ✅ Generate a unique student ID
const generateStudentId = (students) => {
  const newId = students.length + 1;
  return newId;
};

const StudentDetails = () => {
  const { students } = useSelector((state) => state.students);
  const dispatch = useDispatch();

  const [student, setStudent] = useState({
    id: "",
    name: "",
    age: "",
    email: "",
    course: "",
    batch: "",
    academicYear: ""
  });

  const [index, setIndex] = useState(null);
  const [error, setError] = useState("");
  const [maxLimit] = useState(10);
  const [filteredStudents, setFilteredStudents] = useState(students);

  // ✅ Sync filtered students with Redux store
  useEffect(() => {
    setFilteredStudents(students);
  }, [students]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({ ...prev, [name]: value }));
  };

  const clearForm = () => {
    setStudent({
      id: "",
      name: "",
      age: "",
      email: "",
      course: "",
      batch: "",
      academicYear: ""
    });
    setIndex(null);
    setError("");
  };

  const handleAddUser = () => {
    if (students.length >= maxLimit) {
      setError("Student limit reached! Cannot add more students.");
      return;
    }

    const { name, age, email, course, batch, academicYear } = student;

    if (!name || !age || !email || !course || !batch || !academicYear) {
      setError("All fields are required!");
      return;
    }

    const courseExists = students.some(
      (usr) => usr.course === course && usr.batch === batch
    );

    if (courseExists) {
      setError("This course has already been enrolled by another student in the same batch.");
      return;
    }

    const newStudent = {
      ...student,
      id: generateStudentId(students),
    };

    dispatch(addUserAction(newStudent));
    clearForm();
  };

  const handleEdit = (usr, i) => {
    setStudent(usr);
    setIndex(i);
    setError("");
  };

  const handleUpdateUser = () => {
    const { name, age, email, course, batch, academicYear } = student;

    if (!name || !age || !email || !course || !batch || !academicYear) {
      setError("All fields are required!");
      return;
    }

    const courseExists = students.some(
      (usr) =>
        usr.course === course &&
        usr.batch === batch &&
        usr.id !== student.id
    );

    if (courseExists) {
      setError("This course has already been enrolled by another student in the same batch.");
      return;
    }

    dispatch(updateUserAction({ index, student }));
    clearForm();
  };

  const handleDelete = (index) => {
    dispatch(deleteUserAction({ index }));
  };

  const batchFilter = (batch) => {
    if (!batch) return setFilteredStudents(students);
    const filtered = students.filter((student) => student.batch === batch);
    setFilteredStudents(filtered);
  };

  const academicYearFilter = (year) => {
    if (!year) return setFilteredStudents(students);
    const filtered = students.filter((student) => student.academicYear === year);
    setFilteredStudents(filtered);
  };

  return (
    <div>
      <h3>Current Enrollments: {students.length}</h3>

      <form>
        <label>Name</label>
        <input type="text" name="name" value={student.name} onChange={handleChange} /><br />

        <label>Age</label>
        <input type="number" name="age" value={student.age} onChange={handleChange} /><br />

        <label>Email</label>
        <input type="email" name="email" value={student.email} onChange={handleChange} /><br />

        <label>Course</label>
        <input type="text" name="course" value={student.course} onChange={handleChange} /><br />

        <label>Batch</label>
        <input type="text" name="batch" value={student.batch} onChange={handleChange} /><br />

        <label>Academic Year</label>
        <input type="text" name="academicYear" value={student.academicYear} onChange={handleChange} /><br />

        {error && <p style={{ color: "red" }}>{error}</p>}

        {index === null ? (
          <button type="button" onClick={handleAddUser}>Add Student</button>
        ) : (
          <button type="button" onClick={handleUpdateUser}>Update Student</button>
        )}
      </form>

      <h4>Filter Students by Batch</h4>
      <select onChange={(e) => batchFilter(e.target.value)}>
        <option value="">Select Batch</option>
        <option value="Batch A">Batch A</option>
        <option value="Batch B">Batch B</option>
      </select>

      <h4>Filter Students by Academic Year</h4>
      <select onChange={(e) => academicYearFilter(e.target.value)}>
        <option value="">Select Academic Year</option>
        <option value="2025">2025</option>
        <option value="2026">2026</option>
      </select>

      <table border={1} style={{ width: "80%", marginTop: "20px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Academic Year</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((usr, i) => (
            <tr key={usr.id}>
              <td>{usr.id}</td>
              <td>{usr.name}</td>
              <td>{usr.age}</td>
              <td>{usr.email}</td>
              <td>{usr.course}</td>
              <td>{usr.batch}</td>
              <td>{usr.academicYear}</td>
              <td>
                <button onClick={() => handleEdit(usr, i)}>Edit</button>
              </td>
              <td>
                <button onClick={() => handleDelete(i)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentDetails;