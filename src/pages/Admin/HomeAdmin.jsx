import React, {useContext} from 'react'
import { AuthContext } from '../../context';

export const HomeAdmin = () => {
  const { logout } = useContext(AuthContext)

  return (
    <div>
        <h1>HomeAdmin</h1>
        
    </div>
  )
}
