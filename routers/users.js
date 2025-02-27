const express = require('express')
const router = express.Router();
const dataFile = require("../utils/data")

function GenerateRandomString(length){
    let result = "";
    let source = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    for (let index = 0; index < length; index++) {
       let rd = Math.floor(Math.random()*source.length);
       result+=source.charAt(rd);
    }
    return result;
}


router.get('/', (req, res) => {
    let nameQuery = req.query.name;
    if(!nameQuery){
        let users = dataFile.dataUser;
        res.send(users)
    }else{
        let users = dataFile.dataUser
            .filter(u=>u.name.toLowerCase().indexOf(nameQuery)>-1);
        res.send(users)
    }
    
})
router.get('/:id', (req, res) => {
    let users = dataFile.dataUser;
    let user = users.filter(u=>u.id==req.params.id);
    if(user.length>0){
        res.status(200).send(user)
    }else{
        res.status(404).send({
            message:"khong co user"
        })
    }
})
router.post('/', (req, res) => {
    //users.push(req.body);
    let users = dataFile.dataUser;
    let id = req.body.id;
    if(typeof id == 'undefined'){
        res.status(404).send({
            message:"data khong lop le"
        })
    }else{
        let checkExist = (users.filter(u=>u.id==id).length==0);
        if(checkExist){
            users.push(req.body);
            res.status(200).send(users)
        }else{
            res.status(404).send({
                message:"id khong lop le"
            })
        }
    }
})

router.put('/:id',(req,res)=>{
    let users = dataFile.dataUser;
    let id = req.params.id;
    let user = users.find(u=>u.id==id);
    if(user){
        for (const key of Object.keys(req.body)) {
            user[key]=req.body[key];
        }
        res.status(200).send(user)
    }else{
        res.status(404).send({
            message:"id khong lop le"
        })
    }
})
router.delete('/:id',(req,res)=>{
    let users = dataFile.dataUser;
    let id = req.params.id;
    let user = users.find(u=>u.id==id);
    if(user){
        user.isDelete=true
        res.status(200).send(user)
    }else{
        res.status(404).send({
            message:"id khong lop le"
        })
    }
})


module.exports = router