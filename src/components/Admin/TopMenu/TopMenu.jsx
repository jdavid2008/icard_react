import { useContext } from "react";
import {Icon, Menu} from "semantic-ui-react";
import { AuthContext } from '../../../context';

import "./TopMenu.scss";

export const TopMenu = () => {
    
    const { auth, logout } = useContext(AuthContext);

    const renderName = () => {
        if (auth?.first_name && auth?.last_name) {
            return `${auth?.first_name} ${auth.last_name}`
        } 
        
        return `${auth?.email}`
        
    }

  return (
    <Menu fixed="top" className="top-menu-admin">
        <Menu.Item className="top-menu-admin__logo">
            <p>iCard Admin</p>
        </Menu.Item>

        <Menu.Menu position="right">
            <Menu.Item>Hola {renderName()}</Menu.Item>
            <Menu.Item onClick={logout}>
                <Icon name="sign-out"/>
            </Menu.Item>

        </Menu.Menu>
    </Menu>
  )
}
