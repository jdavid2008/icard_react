import React,{useEffect} from 'react';
import {Loader} from "semantic-ui-react";
import {HeaderPage} from "../../components/Admin/HeaderPage"
import { useUser } from '../../hooks'

export const UsersAdmin = () => {
  const {loading, users, getUsers } = useUser();
  
  useEffect(() => getUsers(), []);
  
  return (
    <>
        <HeaderPage title="Usuarios"/>
        {loading ? (
            <Loader active inline="centered">
              Cargando...
            </Loader>
        ):(
          <h1>Tabla de usuarios</h1>
        )
        
        
        }
    </>
  )
}
