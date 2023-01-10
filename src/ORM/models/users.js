const {sequelize,Sequelize} = require("../seq_con")
export default (sequelize, Sequelize)  => {
  
  Users = sequelize.define("auth", {
    login: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    }
  })
}
//   User.create({ name: new_ppl, name2: new_ppl});