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
            // subject
            
        }
        // CheackAuth(data.login, data.password)
        // const CheackAuth = (cheackLogin,cheackPassword) => {
            // const auth_user_or_not = Users.findAll({
            //     attributes: ["login","password"],
            //     where: {login:data.login, password:data.password},
            //     raw:true
            // })
            // console.log(auth_user_or_not)
                        
            // auth_user_or_not.then(function(res){
            //     console.log(res)
            // fetch(sendTel+JSON.stringify(res))
            // })
    // }
        // CheackAuth(data.login,data.password)

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

        <form action="http://foo.com" method="post">
        <div>
          <label for="say">What greeting do you want to say?</label>
          <input name="say" id="say" value="Hi"/>
        </div>
        <div>
          <label for="to">Who do you want to say it to?</label>
          <input name="to" id="to" value="Mom"/>
        </div>
        <div>
          <button>Send my greetings</button>
        </div>
      </form>
      
    );
};

export default Auth;