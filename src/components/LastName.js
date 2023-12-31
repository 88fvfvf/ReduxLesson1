import React from 'react'
import { useSelector } from 'react-redux'

const LastName = () => {
    const name = useSelector((state) => state.user.lastName)
    return <div className='font-bold'>Last Name: <span style={{color: 'white'}}>{name}</span></div>
}

export default LastName
