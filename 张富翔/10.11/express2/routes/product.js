var express=require('express');
var router=express.Router();

//product
router.route("/")
    .get(function(req,res){
        res.send("get product");
    })
    .post(function(req,res){
        res.send("post product");
    })

//list
router.route("/list")
    .get(function(req,res){
        res.send("get product/list");
    })
    .post(function(req,res) {
        res.send("post product/list");
    })

module.exports=router;