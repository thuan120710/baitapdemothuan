const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

let users = [{
    id:1,
    name:"Tung"
},{
    id:2,
    name:"Toan"
},{
    id:3,
    name:"Tien"
}]

app.get('/', (req, res) => {
  res.send(users)
})
app.get('/:id', (req, res) => {
    let user = users.filter(u=>u.id==req.params.id);
    if(user.length>0){
        res.status(200).send(user)
    }else{
        res.status(404).send({
            message:"khong co user"
        })
    }
})
app.post('/', (req, res) => {
    //users.push(req.body);
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

app.put('/:id',(req,res)=>{
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
app.delete('/:id',(req,res)=>{
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


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})