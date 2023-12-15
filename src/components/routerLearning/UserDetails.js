import React from 'react'
import { useParams } from 'react-router-dom'

function UserDetails() {
  const params = useParams();

  return (
    <div>Details of User :- {params.userId}</div>
  )
}

export default UserDetails