const mysql =require('mysql2');

const constring='mysql://libuser:libpass@127.0.0.1:3306/library';
//CREATE USER TO MYSQL
//CREATE USER libuser@localhost IDENTIFIED BY 'libpass';
//GRANT ALL ON library.* TO libuser@localhost;

const connection=mysql.createPool(constring);

module.exports=connection;