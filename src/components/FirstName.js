import React from 'react'
import { useSelector } from 'react-redux'

const FirstName = () => {
    const name = useSelector((state) => state.user.firstName)
    return <div className='font-bold'>First Name: <span style={{color: 'white'}}>{name}</span></div>
}

export default FirstName
