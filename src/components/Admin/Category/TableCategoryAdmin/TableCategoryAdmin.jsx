/* eslint-disable react/prop-types */
import { useState } from "react";
import { Table, Image, Button, Icon, Confirm} from "semantic-ui-react";
import { map } from "lodash";
import { toast } from "react-toastify";


import "./TableCategoryAdmin.scss";

export const TableCategoryAdmin = ( {categories, updateCategory, deleteCategory, onRefresh}) => {
  const [open,setOpen] = useState(false);
  const [content,setContent] = useState("");
  const [selectCategory, setSelectCategory] = useState(null);

  const showMsgConfirm = ( category ) => {
    setContent(`¿Seguro de eliminar Categoría ${category.title}`)
    setSelectCategory(category);
    setOpen(true);
  }
  const handleCancel = () =>  setOpen(false);

  const handleConfirm = ( ) => {
    const id = selectCategory.id;
    deleteCategory(id);
    toast.warn(`Categoría ${selectCategory.title} borrada`);
    setOpen(false);
    onRefresh();
  }

  return (
    <>
      <Table className="table-category-admin">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Imagen</Table.HeaderCell>
            <Table.HeaderCell>Categoría</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {map(categories, (category, index )=> (
            <Table.Row key={index}>
              <Table.Cell width={2}>
                <Image src={category.image} />
              </Table.Cell>
              <Table.Cell>
                {category.title}
              </Table.Cell>
              <Action category={category} updateCategory={updateCategory} showMsgConfirm={showMsgConfirm}/>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      <Confirm
        open={open}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        content={content}
      />

    </>


  )
}

function Action( {category, updateCategory, showMsgConfirm} ) {
  return (
    <Table.Cell textAlign="right">
      <Button icon onClick={() => updateCategory(category)}>
        <Icon name="pencil"/>
      </Button>
      <Button icon negative onClick={() => showMsgConfirm(category)}>
        <Icon name="close"/>
      </Button>     
    </Table.Cell>
  )
}