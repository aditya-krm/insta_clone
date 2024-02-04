const express = require("express");
const app = express();
const port = 3000;

app.set("view engine","ejs");
app.use(express.static("./public"));

let data = [
    {
        id:"1a",
        dp:"https://scontent.fdel72-1.fna.fbcdn.net/v/t39.30808-6/338843009_606439644705835_7290410403613281109_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=XKcqDISg-iUAX981zT-&_nc_ht=scontent.fdel72-1.fna&oh=00_AfCnVmiPGhMuDOn3v7wMDvTJqV-j3Y7QhMK1Wg_Ihp9Hrg&oe=65C4E04B",
        username:"aditya_k.02",
        name:"Aditya Karmakar",
        postcount:28,
        follower:183,
        following:72,
        posts:[
            {
                image:"https://images.unsplash.com/photo-1706956845444-a94f19614939?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                likes:1000,
                comments:300
            },
            {
                image:"https://images.unsplash.com/photo-1706956845444-a94f19614939?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                likes:1000,
                comments:300
            },
            {
                image:"https://images.unsplash.com/photo-1706956845444-a94f19614939?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                likes:1000,
                comments:300
            },
            {
                image:"https://images.unsplash.com/photo-1706956845444-a94f19614939?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                likes:1000,
                comments:300
            },
            {
                image:"https://images.unsplash.com/photo-1706956845444-a94f19614939?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                likes:1000,
                comments:300
            }
        ]
    }
];








app.use(function(req,res,next){
    next();
})
app.get('/',function(req,res){
    res.send("App is under construction!!");
})
app.get('/profile',function(req,res){
    console.log(data);
    res.render("profile",{data:data});
})

app.listen(port,()=>{
    console.log(`listening on port number ${port}`);
})