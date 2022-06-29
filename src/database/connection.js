const kenx = require('knex')({
    client:'mysql2',
    connection:{
        host:'localhost',
        user:'root',
        password:'Conexa@saude321',
        database:'sistPet',
    }
});     

//SEQUELIZE
const Sequelize = require('sequelize')

const Connection = new Sequelize('sistPet','root','Conexa@saude321',{
    host:'localhost',
    dialect:'mysql',
    define: {
        timestamps: false,
        freezeTableName: true
    }
})

Connection.authenticate().then(()=>{console.log('Conexão com o banco estabelicida')})
.catch(err => {console.log(`Erro ao se conectar com banco: \n ${err}`)})

module.exports = {
    database : kenx,
    db : Connection,
    Sequelize : Sequelize,
}
