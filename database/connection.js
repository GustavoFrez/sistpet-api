const kenx = require("knex")({
  client: "mysql2",
  connection: {
    host: "us-cdbr-east-06.cleardb.net",
    user: "b6068e5982aae8",
    password: "6d6a3864",
    database: "heroku_e4c12dba8a3b188",
  },
});

//SEQUELIZE
const Sequelize = require("sequelize");

const Connection = new Sequelize(
  "heroku_e4c12dba8a3b188",
  "b6068e5982aae8",
  "6d6a3864",
  {
    host: "us-cdbr-east-06.cleardb.net",
    dialect: "mysql",
    define: {
      timestamps: false,
      freezeTableName: true,
    },
  }
);

Connection.authenticate()
  .then(() => {
    console.log("Conexão com o banco estabelicida");
  })
  .catch((err) => {
    console.log(`Erro ao se conectar com banco: \n ${err}`);
  });

module.exports = {
  database: kenx,
  db: Connection,
  Sequelize: Sequelize,
};
