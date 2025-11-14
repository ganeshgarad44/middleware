const express = require('express');
const app = express();
const port = 3000;


let blog =[
    { id: 1, 
      title: 'First Post', 
      content: 'This is the content of the first post.' },
]

app.use(express.json());

app.use('/',(req,res,next)=>{
    console.log(`${req.method} ${req.url}  - ${new Date().toTimeString()}`);
    next();
})

app.get('/',(req,res)=>{
    res.send('home')
})
app.get('/blog',(req,res)=>{
    res.send('blog')
})

app.post('/blog',(req,res)=>{
    const newPost = req.body;
    blog.push(newPost);
    res.status(201).send('Blog post created');
})

app.delete('/blog/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    blog = blog.filter(post => post.id !== id);
    res.send('Blog post deleted');
})

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})