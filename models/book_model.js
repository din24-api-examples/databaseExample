const book = {
    bookData:[
        {'name' :"C++", 'author' :"Jim Smith"},
        {'name' :"Java", 'author' :"Lisa Jones"},
        {'name' :"MySQL", 'author' :"Bob Danieles"}
    ],
    getAll(callback){
        callback(this.bookData);
    },
    getOne(id, callback){
        callback(this.bookData[id]);
    },
    add(newBook,callback){
        //in this case there is SQL-injection
        const sql="Insert INTO book VALUES("+newBook.name+","+newBook.author+")";
        callback(sql);
    }
}

module.exports=book;