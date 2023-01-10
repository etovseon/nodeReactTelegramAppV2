//const Sequelize = require("sequelize");
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    "kurwa",
    "root",
    "",
    {
    // host: "0.0.0.0",
    dialect: "sqlite",
    // pool: {
    // max: 5,
    // min: 0,
    // idle: 10000
    // },
    storage: "kurwa.db"
}
);

export default {sequelize,Sequelize};