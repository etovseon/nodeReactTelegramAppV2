import React from 'react'
import { useNavigate } from "react-router-dom";
import Button from '../Button/Button';
import './FirstFrame.css'


// const goMenu = () => {
//     return <redirect to='/'/>
//   };

// const goOrder = () => {
//     return <redirect to='/order'/>
//   };

// const goAuth = () => {
//     return <redirect to='/form'/>
//   };

// const Menu = () =>{ 
//     let path = `/`; 
//     navigate(path);
//   }

// const Order = () =>{ 
//     let path = `/order`; 
//     navigate(path);
//   }  

// const Auth = () =>{ 
//     let path = `/form`; 
//     navigate(path);
//   }    
const FirstFrame  = () => {
    let navigate = useNavigate();

    const Menu = () =>{ 
        let path = `/`; 
        navigate(path);
      }
    
    const Order = () =>{ 
        let path = `/order`; 
        navigate(path);
      }  
    
    const Auth = () =>{ 
        let path = `/auth`; 
        navigate(path);
      }       
    return (
        // <ul>
        //     <Button color="primary" className="px-4" onClick={Menu}>Menu</Button>
        //     <Button color="primary" className="px-4" onClick={Order}>Order</Button>
        //     <Button color="primary" className="px-4" onClick={Auth}>Auth</Button>
        // </ul>
        <div class="vertical-menu">
            <a href="#" class="active">Навигация</a>
            <Button onClick={Menu}>Menu</Button>
            <Button onClick={Order}>Order</Button>
            <Button onClick={Auth}>Auth</Button>
        </div>
    );
}
export default FirstFrame;