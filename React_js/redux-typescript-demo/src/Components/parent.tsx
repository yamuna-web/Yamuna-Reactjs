import React from 'react'
import Chid from './child'

interface ParentProps {
    usersInfo: string[]
}
const Parent: React.FC<ParentProps> = ({ usersInfo }) => {
    return (
        <div>
            <Chid usersInfo={usersInfo} />
        </div>
    )
}

export default Parent