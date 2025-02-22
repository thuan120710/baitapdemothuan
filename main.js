async function LoadSync(){
    let res = await fetch("http://localhost:3000/posts");
    let posts = await res.json();
    let body = document.getElementById("body");
    body.innerHTML ="";
    for (const post of posts) {
        body.innerHTML+=ConvertFromObjToHTML(post);
    }
    //console.log(posts);
}
async function Save(){
    let obj = {
        id: document.getElementById("id").value,
        title: document.getElementById("title").value,
        views: document.getElementById("views").value,
    }
    let res = await fetch("http://localhost:3000/posts",
    {
        method:'POST',
        body:JSON.stringify(obj),
        headers:{
            "Content-Type":"application/json"
        }
    });
    LoadSync();
}
function ConvertFromObjToHTML(post){
    let string = '<tr>';
    string += `<td>${post.id}</td>`;
    string += `<td>${post.title}</td>`;
    string += `<td>${post.views}</td>`
    string += '</tr>';
    return string;
}
LoadSync();

