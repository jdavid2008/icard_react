import { useContext } from "react";
import {Menu, Icon} from "semantic-ui-react"
import { Link, useLocation} from "react-router-dom";
import { AuthContext } from '../../../context';
import "./SideMenu.scss"


export const SideMenu = ({children}) => {
  const {pathname} = useLocation();
  
  return (
    <div className="side-menu-admin">
      <MenuLeft pathname={pathname}/>
      <div className="content">{children}</div>
    </div>
  )
}

const MenuLeft=({pathname}) => {
  const { auth } = useContext(AuthContext)
  
  return (
    <Menu fixed="left" boderless className="side" vertical>
      <Menu.Item as={Link} to={'/admin'} active={ pathname==='/admin'}>
        <Icon name="home"/>
        Pedidos
      </Menu.Item>

      <Menu.Item as={Link} to={'/admin/tables'} active={ pathname==='/tables'}>
        <Icon name="table"/>
        Mesas
      </Menu.Item>

      <Menu.Item as={Link} to={'/admin/payments-history'} active={ pathname==='/payments-history'}>
        <Icon name="history"/>
        Historial de Pagos
      </Menu.Item>

      <Menu.Item as={Link} to={'/admin/categories'} active={ pathname==='/categories'}>
        <Icon name="folder"/>
        Categorías
      </Menu.Item>

      <Menu.Item as={Link} to={'/admin/products'} active={ pathname==='/products'}>
        <Icon name="cart"/>
        Productos
      </Menu.Item>

      { auth?.is_staff && (
      <Menu.Item as={Link} to={'/admin/users'} active={ pathname==='/users'}>
        <Icon name="users"/>
        Usuarios
      </Menu.Item>
      )}

    </Menu>
  )
}
