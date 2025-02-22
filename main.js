

var global;
async function LoadSync(){
    let res = await fetch("http://localhost:3000/posts");
    let posts = await res.json();
    global = posts;
    let body = document.getElementById("body");
    body.innerHTML ="";
    posts = posts.filter(e=>!e.isDelete)
    for (const post of posts) {
        body.innerHTML+=ConvertFromObjToHTML(post);
    }
    //console.log(posts);
}
function CheckExistID(id){
    let ids = global.filter(e=>e.id==id);
    return ids.length > 0;
}
function getMax(){
    let ids = global.filter(e=>!e.isDelete).map(e=>e.id);
    return ids.reduce(function(max,element){
        if(max>element){
            return max;
        }else{
            return element;
        }
    },ids[0])
}

async function Save(){
    let id = document.getElementById("id").value;
    //console.log(CheckExistID(id));
    let obj = {
        id: id,
        title: document.getElementById("title").value,
        views: document.getElementById("views").value,
    }
    if(CheckExistID(id)){
        //edit
        let res = await fetch("http://localhost:3000/posts/"+id,
        {
            method:'PUT',
            body:JSON.stringify(obj),
            headers:{
                "Content-Type":"application/json"
            }
        });
    }else{
        //create
        obj.id = Number.parseInt(getMax())+1;
        let res = await fetch("http://localhost:3000/posts",
        {
            method:'POST',
            body:JSON.stringify(obj),
            headers:{
                "Content-Type":"application/json"
            }
        });
    }
    LoadSync();
}

async function Delete(id){
    let obj = await fetch("http://localhost:3000/posts/"+id)
    obj = await obj.json();
    obj.isDelete=true
    console.log(obj);
    let res = await fetch("http://localhost:3000/posts/"+id,
    {
        method:'PUT',
        body:JSON.stringify(obj),
        headers:{
            "Content-Type":"application/json"
        }
    });
}
function ConvertFromObjToHTML(post){
    let string = '<tr>';
    string += `<td>${post.id}</td>`;
    string += `<td>${post.title}</td>`;
    string += `<td>${post.views}</td>`
    string += `<td><button onclick="Delete(${post.id})">Delete</button></td>`
    string += '</tr>';
    return string;
}


LoadSync();

