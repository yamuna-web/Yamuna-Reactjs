import React,{ useState } from "react"
// function User(){

// }
const Users=()=>{
  const[studentdetails,setstudent]=useState({fname:"",lname:""})
  const[student,setstudentreg]=useState([])
  const[editindex,seteditindex]=useState(null)

  const handleevent=(e)=>{
    const newstd={...studentdetails}
    newstd[e.target.name]=e.target.value
    setstudent(newstd)

  }
  const addstudent=()=>{
    const stdarr1=[...student]
    stdarr1.push(studentdetails)
    setstudentreg(stdarr1)   
    setstudent({fname:"",lname:""})
   
  }
  const handleEdit=(std,i)=>{
    setstudent(std)
    seteditindex(i)

   
  }
  const handledelete=(i)=>{
    const stdar=[...student]
    stdar.splice(i,1)
    setstudentreg(stdar) 
    
   
  }
  const updatestudent=()=>{
    const stdar3=[...student]
    stdar3[editindex]=studentdetails
    setstudentreg(stdar3)
    setstudent({fname:"",lname:""})
    seteditindex(null)

  }
  return(
    <>
    <h1>Student Registration</h1>
    <form action="">
      <label htmlFor="">firstname</label>
      <input type="text" name="fname" id="" value={studentdetails.fname} onChange={handleevent} />{""}
      <label htmlFor="">lasttname</label>
      <input type="text" name="lname" id="" value={studentdetails.lname}  onChange={handleevent}/>{""} 
    {editindex===null?<button type="button" onClick={addstudent}>add student</button>:
    <button type="button" onClick={updatestudent}>update student</button>}

    </form>
    <table border={1}>
      <thead><tr>
        <th>fname</th>
        <th>lname</th>
        <th>edit</th>
        <th>delete</th>        
        </tr></thead>
        <tbody>
          {student.map((std,i)=>{
            return <tr key={i}>
              <td>{std.fname}</td>
              <td>{std.lname}</td>
              <td><button type="button" onClick={()=>{handleEdit(std,i)}}>Edit</button></td>
              <td><button type="button" onClick={()=>{handledelete(i)}}>Delete</button></td>
            </tr>
          })}
          
        </tbody>
    </table>
    </>
  )

}
export default Users