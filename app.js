const express = require('express'); const port = 3000;
const app = express(); app.listen(port, function(){ 
    console.log("Express example running on port " + port); 
});
const bookRouter=require('./routes/book');
const userRouter=require('./routes/user');

app.use(express.json());
app.use(express.urlencoded({ extended: false })); 


app.use('/book',bookRouter);
app.use('/user', userRouter);




module.exports = app; 