import React from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'

function Users() {
  const {userId, city} = useParams();
  console.log("use params :- ", userId);
  return (
    <div>
        <h2>User 1</h2>
        <h2>User 2</h2>
        <h2>User 3</h2>
        <Link to="1" >User 1</Link><br />
        <Link to="2" >User 2</Link><br />
        <Link to="3" >User 3</Link>
        <Outlet/>
    </div>
  )
}

export default Users