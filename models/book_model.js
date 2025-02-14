const db=require('../database');

const book ={ 
    getAll(callback){
        return db.query('SELECT * FROM book', callback);
    },
    getOne(id, callback){
        return db.query('SELECT * FROM book WHERE id_book=?',[id], callback);
    },
    add(newBook,callback){
        return db.query('INSERT INTO book(name, author,isbn) VALUES(?,?,?)',[newBook.name, newBook.author, newBook.isbn], callback);
    },
    update(id, updateBook, callback){
        return db.query('UPDATE book SET name=?, author=?, isbn=? WHERE id_book=?',[updateBook.name, updateBook.author, updateBook.isbn, id], callback);
    },
    delete(id, callback){
        return db.query('DELETE FROM book WHERE id_book=?',[id], callback);
    }
}

module.exports=book;