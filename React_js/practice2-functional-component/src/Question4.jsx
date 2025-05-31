import React, { useState } from "react"
const Question4 = () => {

     const [name, setName] = useState('');
    const [email, setEmail] = useState('');
console.log(email)

    const handleNamechange = (e) => setName(e.target.value)
    const handleEmailchange = (e) => setEmail(e.target.value)
    return (
        
        <div>
            <h2>user form</h2>
            <label htmlFor="">Name</label>
            <input type="text" value={name} onChange={handleNamechange} />
            <label htmlFor="">Email</label>
            <input type="email" value={email} onChange={handleEmailchange} />
            <p>name:{name}</p>
            <p>email:{email}</p>
        </div>
    )
}
export default Question4