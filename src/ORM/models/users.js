const {sequelize,Sequelize} = require("../seq_con")
Users = sequelize.define("users", {
    login: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    }
  });

//   User.create({ name: new_ppl, name2: new_ppl});
module.exports = Users;