const Users = require("../../ORM/models/users")
        const CheackAuth = (cheackLogin,cheackPassword) => {
            const auth_user_or_not = Users.findAll({
                attributes: ["login","password"],
                where: {login:data.login, password:data.password},
                raw:true
            })
            console.log(auth_user_or_not)
                        
            auth_user_or_not.then(function(res){
                console.log(res)
            fetch(sendTel+JSON.stringify(res))
            })
    }
export default CheackAuth;