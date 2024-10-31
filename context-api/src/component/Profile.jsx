
import React, {useContext}from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {

    const {user} = useContext(UserContext)
   

      if(!user) return <h4>Not Logged in</h4>


  return (
    <h1 className='text-white'>

      Profile: {user.userName}

    </h1>
  )
}

export default Profile