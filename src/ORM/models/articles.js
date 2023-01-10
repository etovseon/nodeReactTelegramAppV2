const {sequelize,Sequelize} = require("../seq_con")
Articles = sequelize.define("articles", {
    title: {
      type: Sequelize.STRING
    },
    price: {
      type: Sequelize.INTEGER
    },
    count: {
      type: Sequelize.INTEGER
    },
    group_id: {
      type: Sequelize.INTEGER
    },
    description: {
      type: Sequelize.STRING
    }
  });
module.exports = Articles;