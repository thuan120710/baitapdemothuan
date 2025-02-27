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
    console.log(req.body);
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})