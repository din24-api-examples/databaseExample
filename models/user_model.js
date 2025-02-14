const db=require('../database');
const bcrypt = require('bcryptjs');

const user ={ 
    getAll(callback){
        return db.query('SELECT * FROM user', callback);
    },
    getOne(id, callback){
        return db.query('SELECT * FROM user WHERE id_user=?',[id], callback);
    },
    add(newUser,callback){
        //password should be crypted
        bcrypt.hash(newUser.password,10, function(err, hashedPassword){
            return db.query('INSERT INTO user(username,password) VALUES(?,?)',[newUser.username, hashedPassword], callback);
        })
        
    },
    update(id, updateUser, callback){
        bcrypt.hash(updateUser.password,10,function(err, hashedPassword){
            return db.query('UPDATE user SET username=?, password=? WHERE id_user=?',[updateUser.username, hashedPassword, id], callback);
        })
    },
    delete(id, callback){
        return db.query('DELETE FROM user WHERE id_user=?',[id], callback);
    }
}

module.exports=user;