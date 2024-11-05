import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchUser } from './userSlice'
import './UserList.css'

const UserList = () => {
    const dispatch=useDispatch()
    const users=useSelector((state)=>state.users.users)
    const status=useSelector((state)=>state.users.status)
    useEffect(()=>{
        if(status==='idle'){
            dispatch(fetchUser())
        }
    },[status,dispatch])

    if(status==='loading'){
        return <div className="spinner"></div>
    }
    if(status==='failed'){
        return <p className="error">Error fetching users.</p>
    }
    return (
        <div className="user-list-container">
          <h2>User List</h2>
          <ul className="user-list">
            {users.map((user) => (
              <li key={user.id} className="user-item">
                <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} className="user-avatar" />
                <span>{user.first_name} {user.last_name}</span>
              </li>
            ))}
          </ul>
        </div>
      );
}

export default UserList
