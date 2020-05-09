const express =require ('express');
const app=express()
const port=3001

app.get('/hello',(req,res) =>
{
    res.send('i am creating node js express application')
})




app.listen(port, () =>
{
    console.log('server started at 3000')
});