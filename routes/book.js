const express = require('express'); 
const router = express.Router();
const book = require('../models/book_model');

router.get('/',function(request,response){
    book.getAll(function(result){
        response.json(result);
    })
});

router.get('/:id',function(request, response){
    book.getOne(request.params.id,function(result){
        response.json(result);
    })
});


router.post('/',function(request, response){
    book.add(request.body, function(result){
        response.json(result);
    })
});

router.put('/:id');
router.delete('/:i');


module.exports = router; 