const express = require('express'); 
const router = express.Router();
const user = require('../models/user_model');

router.get('/',function(request,response){
    user.getAll(function(err,result){
        if(err){
            response.json(err);
        }
        else {
            response.json(result);
        }
        
    })
});

router.get('/:id',function(request, response){
    user.getOne(request.params.id,function(err,result){
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
    user.add(request.body, function(err,result){
        if(err){
            response.json(err);
        }
        else {
            response.json(result);
        }
        
    })
});

router.put('/:id',function(request, response){
    user.update(request.params.id, request.body, function(err, result){
        if(err){
            response.json(err);
        }
        else {
            response.json(result);
        }
    })
});
router.delete('/:id',function(request, response){
    user.delete(request.params.id, function(err, result){
        if(err){
            response.json(err);
        }
        else {
            response.json(result);
        }
    })
});


module.exports = router; 