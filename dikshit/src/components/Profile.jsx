
import React from 'react'
import User from './User'
function Profile({username}) {
  return (
    <div className='border-4 p-6 border-blue-500 m-3 rounded-sm'>
      <h1>Profile component</h1>
      <User username={username}/>
    </div>
  )
}

export default Profile