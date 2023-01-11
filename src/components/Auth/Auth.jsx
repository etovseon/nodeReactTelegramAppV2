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

    return (

<div className="ath">
<form action="https://2f0e-188-247-115-178.eu.ngrok.io/web-data" method="post">
  <label for="fname">First name:</label>
  <input type="text" id="login" name="login"/>
  <label for="lname">Last name:</label>
  <input type="text" id="password" name="password"/>
  <input type="submit" value="Submit"/>
</form>
</div>
      
    );
};

export default Auth;