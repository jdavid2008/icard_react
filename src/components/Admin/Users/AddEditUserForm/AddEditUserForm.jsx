import { Form, Button, Checkbox} from "semantic-ui-react";
import "./AddEditUserForm.scss";

export const AddEditUserForm = () => {
  return (
   <Form className="add-edit-user-form">
        <Form.Input name="username" placeholder="Nombre de Usuario" />
        <Form.Input name="email" placeholder="Correo Electrónico" />
        <Form.Input name="first_name" placeholder="Nombre" />
        <Form.Input name="last_name" placeholder="Apellidos" />
        <Form.Input name="password" type="password" placeholder="Contraseña" />
        <div className="add-edit-user-form__active">
            <Checkbox toggle/> Usuario Activo
        </div>

        <div className="add-edit-user-form__staff">
            <Checkbox toggle/> Usuario administrador
        </div>
        
        <Button type="submit" content="Crear" primary fluid/>

   </Form>

  )
}
