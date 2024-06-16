import { useEffect, useState  } from "react";
import {Loader} from "semantic-ui-react"

import { HeaderPage, TableCategoryAdmin,AddEditCategoryForm } from "../../components/Admin";
import {ModalBasic} from "../../components/Common";
import { useCategory } from "../../hooks"


export const CategoriesAdmin = () => {
  const [titleModal, setTitleModal] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [contentModal, setContentModal] = useState(false);
  const [refresh, setRefresh ] = useState(false);
      
  const { loading, categories, getCategories, deleteCategory } = useCategory()
  
  useEffect(() => {
    getCategories();
  }, [refresh])
  

  const openCloseModal = () => setShowModal( prev => !prev);
  const onRefresh = () => setRefresh( prev => !prev);

  const onDeleteCategory = async (id) => {
    try {
        await deleteCategory(id);
    } catch (error) {
        console.log(error);
    }

  }  


  const addCategory = () => {
    setTitleModal("Nueva Categoría");
    setContentModal(
      <AddEditCategoryForm 
        onClose={openCloseModal} 
        onRefresh={onRefresh}/
      >)
    openCloseModal();
  }

  const updateCategory = ( data ) => {
    setTitleModal("Actualizar Categoría");
    setContentModal(
      <AddEditCategoryForm 
        onClose={openCloseModal} 
        onRefresh={onRefresh}
        category={data}
      />)
    openCloseModal();
  }

  
  
  useEffect(() => {
    getCategories();
  }, []);
  
  return (
    <>
        <HeaderPage 
          title = "Categoría"
          btnTitle="Nueva Categoría"
          btnClick={addCategory}
        />

        {loading ? (
           <Loader active inline="centered" >
              Cargando....
           </Loader>
        ): (
            <TableCategoryAdmin
              categories={categories}
              updateCategory={updateCategory}
              deleteCategory={onDeleteCategory}
              onRefresh={onRefresh}
            />
        )}

        <ModalBasic
          show={showModal}
          title={titleModal}
          onClose={openCloseModal}
          children={contentModal}
        ></ModalBasic>

       
    </>
  )
}

