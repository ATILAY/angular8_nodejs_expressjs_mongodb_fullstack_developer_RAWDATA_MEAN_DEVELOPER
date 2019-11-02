const express = require('express');
const router = express.Router();

const item = require('./itemSchema');


router.get('/items',(req, res, next)=>{
    item.find((err, items)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json(items);
        }

    });
});

router.post('/item',(req, res, next)=>{
    let newItem = new item({
        itemName : req.body.itemName,
        itemDone : req.body.itemDone

    });

    newItem.save((err)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json({
                msg : 'Item has been added successfully'
            });
        }

    });

});

router.put('/item/:id',(req, res, next)=>{
    item.findOneAndUpdate(
        {_id: req.params.id},
        {
            $set:{
                itemDone: req.body.itemDone,

            }
        },
        (err, result)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json({msg : 'Updated successfully'});

            }

        }
    );

});

router.delete('/item/:id',(req, res, next)=>{
    item.remove(
        {_id: req.params.id},
        (err, result)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(result);
            }
        }
    );

});

module.exports = router;
