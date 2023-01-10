import React from "react";
import Button from "../Button/Button";
import {useTelegram} from "../hooks/useTelegram";
import './Header.css'
import { useNavigate } from "react-router-dom";

const Header = () => {
    const {user, onClose} = useTelegram();
    let navigate = useNavigate();

    const Menu = () =>{ 
        let path = `/`; 
        navigate(path);
      }

    return (
        <div className={'header'}>
            <Button onClick={onClose}>Close me</Button>
            <Button onClick={Menu}>Menu</Button>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    )
}

export default Header;