import React, {useCallback, useEffect, useState} from 'react';
import { useTelegram } from "../hooks/useTelegram";
import './Auth.css'
// import {CheackAuth} from "./AuthJS"

const Auth = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    // const [subject, setSubject] = useState('physical');
    const {tg} = useTelegram();
    const sendTel = 'https://api.telegram.org/bot5224001267:AAHOgjCGvZimLApKPmid-Y13Jsxh8mUrO3I/sendMessage?chat_id=614284412&text='

    fetch('http://188.247.115.178:30020/web-data', {
        method: "POST",
        headers: {
            "Accept": "application/json",
            // "Content-Type": "application/json"
        },
        body: JSON.stringify({"as":"12"})
    })

    const onSendData = useCallback(() => {
        const data = {
            login,
            password,           
        }
        fetch('http://188.247.115.178:30020/web-data', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                // "Content-Type": "application/json"
            },
            body: JSON.stringify({"as":"12"})
        }),
        tg.sendData(JSON.stringify(data));
    }, [login, password, /*subject*/])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Авторизация'
        })
    }, [])

    useEffect(() => {
        if(!login || !password) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [login, password])

    const onChangelogin = (e) => {
        setLogin(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }


    const eLogin = (e) => {
        setLogin(e.target.value)
    }
    const ePaswword = (e) => {
        setPassword(e.target.value)
    }

    // const onChangeSubject = (e) => {
    //     setSubject(e.target.value)
    // }

    return (
        // <div className={"form"}>
        //     <h3>Введите ваши данные</h3>
        //     <input
        //         className={'input'}
        //         type="text"
        //         placeholder={'Логин'}
        //         value={login}
        //         onChange={onChangelogin}
        //     />
        //     <input
        //         className={'input'}
        //         type="text"
        //         placeholder={'Пароль'}
        //         value={password}
        //         onChange={onChangePassword}
        //     />
        //     {/* <select value={subject} onChange={onChangeSubject} className={'select'}>
        //         <option value={'physical'}>Физ. лицо</option>
        //         <option value={'legal'}>Юр. лицо</option>
        //     </select> */}
        // </div>

        // <form action="" method="post">


        // <div className={"form"} action="http://188.247.115.178:30020/web-data" method="POST">
        //     <h3>Введите вашиy данные</h3>
        //     <div>
        //     <input
        //         className={'input'}
        //         type="text"
        //         placeholder={'Логин'}
        //         value={login}
        //         onChange={eLogin}
        //     />
        //     </div>
        //     <div>
        //     <input
        //         className={'input'}
        //         type="text"
        //         placeholder={'Пароль'}
        //         value={password}
        //         onChange={ePaswword}
        //     />
        //     </div>
        //     <div>
        //         <button>Send my greetings</button>
        //     </div>
        // </div>

/* <div className="ath" action="http://188.247.115.178:30020/web-data" method="POST"> */
<div className="ath">
<form action="http://188.247.115.178:30020/web-data" method="post">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"/>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"/>
  <input type="submit" value="Submit"/>
</form>
</div>
//    <div className="login-wrapper">
//       <h1>Please Log In</h1>
//       <form>
//         <label>
//           <p>Username</p>
//           <input type="text" />
//         </label>
//         <label>
//           <p>Password</p>
//           <input type="password" />
//         </label>
//         <div>
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//     </div>
      
    );
};

export default Auth;