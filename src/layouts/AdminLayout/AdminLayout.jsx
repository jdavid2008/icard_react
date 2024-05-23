import React, {useContext} from 'react';
import { LoginAdmin } from '../../pages/Admin'
import { AuthContext } from '../../context';
import { TopMenu,SideMenu } from '../../components/Admin';

import "./AdminLayout.scss";

export function AdminLayout( {children} ) {
  const { auth } = useContext(AuthContext)

  console.log('Cargando Layout Admin...',auth)
  
  if (!auth) return <LoginAdmin/>

  return (
    <div className='admin-layout'>
        <div className='admin-layout__menu'>
          <TopMenu />
        </div>
        <div className='admin-layout__main-content'>
          <SideMenu>{children}</SideMenu>
        </div>
        
    </div>
  )
}
