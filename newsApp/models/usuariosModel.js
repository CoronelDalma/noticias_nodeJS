const conn = require('./../bd');

async function getUsuarioByEmailAndPassword(email,password){
    try{
        const data =  await conn.query(`SELECT idusuario,email FROM usuario WHERE email = ? and password = ? `,[email,password])
        return data
    }catch(error){
        throw error;
    }
}

module.exports = {getUsuarioByEmailAndPassword}