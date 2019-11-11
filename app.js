const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname,'public')));

app.get('/index',(req,res)=>{
    res.send('你好');
})
app.listen(80,()=>{
    console.log('路由链接成功');
})