const Student = require("../models/studentModel")
let dataUser = [{
    id:1,
    name:"Tung"
},{
    id:2,
    name:"Toan"
},{
    id:3,
    name:"Tien"
}]
let dataPost = [{
    id:1,
    name:"Post1"
},{
    id:2,
    name:"Post2"
},{
    id:3,
    name:"Post3"
}]

module.exports = {
    dataUser:dataUser,
    dataPost:dataPost,
    dataStudent : [
        new Student("Tung","21DTHA1"),
        new Student("Tung2","21DTHA2"),
        new Student("Tung3","21DTHA3")
    ]
}