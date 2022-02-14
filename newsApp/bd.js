const mysql = require('mysql2')

const connection = mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'qwerty',
    database:'newsApp'
})

// Encapsulando con promesas:
function query(sql,data){
    return new Promise((resolve,reject)=>{
        connection.query(sql,data,function(error,result){
            //Error first callback
            if(error){
                reject(error.sqlMessage)
            }else{
                resolve(result)
            }
        })
    })
}

// Exportamos un objeto
module.exports = {query}