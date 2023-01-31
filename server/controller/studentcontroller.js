const mysql = require('mysql2');
const con = mysql.createConnection({
    host    : process.env.DB_HOST,
    user    : process.env.DB_USER,
    database: process.env.DB_NAME,
    port    : process.env.DB_PORT,
    password: process.env.DB_PASS
});
con.connect((err, result)=>{
    if(err) throw err;
})
exports.data = (req, res)=>{
    con.query('select * from cusdetails', (err, rows)=>{
        if(!err){
            console.log("no error", rows);
            res.json(rows);
        }else{
            console.log("error");
        }

    })
    
}

