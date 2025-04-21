import  { useState } from 'react'
import Parent from './parent'
import { UserContextProvider } from './userContext'

const Main = () => {
    const [usersInfo, setUsersInfo] = useState(["Chenchaiah", "Savithri", "Palavi", "pavan klyan"])
    const [newUsers, setNewUsers] = useState(["Neeraja", "Bhavi", "Yamuna"])
    return (
        <div>
            <UserContextProvider value={newUsers}>
                <Parent usersInfo={usersInfo} />
            </UserContextProvider>
        </div>
    )
}

export default Main
