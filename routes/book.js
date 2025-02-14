const express = require('express'); 
const router = express.Router();
const book = require('../models/book_model');

router.get('/',function(request,response){
    book.getAll(function(err,result){
        if(err){
            response.json(err);
        }
        else {
            response.json(result);
        }
        
    })
});

router.get('/:id',function(request, response){
    book.getOne(request.params.id,function(err,result){
        if(err){
            response.json(err);
        }
        else {
            //response is JSON array
            //response.json(result);
            //response is JSON object
            response.json(result[0]);
        }
    })
});


router.post('/',function(request, response){
    book.add(request.body, function(err,result){
        if(err){
            response.json(err);
        }
        else {
            response.json(result);
        }
        
    })
});

router.put('/:id',function(request, response){
    book.update(request.params.id, request.body, function(err, result){
        if(err){
            response.json(err);
        }
        else {
            response.json(result);
        }
    })
});
router.delete('/:id',function(request, response){
    book.delete(request.params.id, function(err, result){
        if(err){
            response.json(err);
        }
        else {
            response.json(result);
        }
    })
});


module.exports = router; 