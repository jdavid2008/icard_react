import React,{useEffect, useState} from 'react';
import {Loader} from "semantic-ui-react";
import {HeaderPage, TableUsers, AddEditUserForm} from "../../components/Admin";
import { ModalBasic } from "../../components/Common";
import { useUser } from '../../hooks';

export const UsersAdmin = () => {
  const {loading, users, getUsers } = useUser();

  const [titleModal, setTitleModal] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [contentModal, setContentModal] = useState(null);
  
  useEffect(() => getUsers(), []);

  const openCloseModal = () => {
    setShowModal((prev) => !prev)
  }

  const addUser = () => {
    setTitleModal("Nuevo usuario");
    setContentModal(<AddEditUserForm/>)
    openCloseModal();
  }
  
  return (
    <>
        <HeaderPage title="Usuarios" btnTitle="Nuevo Usuario" btnClick={addUser}/>
        {loading ? (
            <Loader active inline="centered">
              Cargando...
            </Loader>
        ):(
          <TableUsers users={users} />
        )}

        <ModalBasic  
          show={showModal} 
          onClose={openCloseModal}
          title={titleModal}
          children={contentModal}
        />
        
    </>
  )
}
