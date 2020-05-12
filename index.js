const express=require('express');
const app=express()
const port=4400

var mysql=require('mysql')
var connInfo = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "12345",
    database: "readyassist"
}
var connection =mysql.createConnection(connInfo);
app.get('/candidates', (req, res) =>
{
    let sql='select*from candidates   ';

    if(req.query.id)
    {
        sql=sql  +  'where id =' + req.query.id;
    }
    
    if(req.query.candidate_name)
    {
       sql='select * from candidates where candidate_name =?';
       connection.query(sql,[req.query.candidate_name],(err,data) =>{
           if(err)
           {
               res.send(err);
           }
           res.send(data);
       });
    }
    
    if(req.query.candidate_mob)
    {
        sql=sql  +  'where candidate_mob =' + req.query.candidate_mob;
    }

    connection.query(sql, function(err, data, fields){
        if(err)
        {
            res.status(500);
            let errMsg={
                error:err
            }
            res.send(errMsg);
        }
        let responseObject ={
            data:data
        }
        res.send(responseObject);

    })
});
app.get('/employees', (req, res) =>
{
    let sql='select*from employees    ';

    if(req.query.id)
    {
        sql= sql+'where id = '+ req.query.id;
    }
    
    if(req.query.emp_city)
    {
       sql='select * from employees where emp_city =?';
       connection.query(sql,[req.query.emp_city],(err,data) =>{
           if(err)
           {
               res.send(err);
           }
           res.send(data);
       });
    }
    if(req.query.emp_name)
    {
       sql='select * from employees where emp_name =?';
       connection.query(sql,[req.query.emp_name],(err,data) =>{
           if(err)
           {
               res.send(err);
           }
           res.send(data);
       });
    }
    connection.query(sql, function(err, data, fields){
        if(err)
        {
            res.status(500);
            let errMsg={
                error:err
            }
            res.send(errMsg);
        }
        let responseObject ={
            data:data
        }
        res.send(responseObject);

    })
});
app.get('/training', (req, res) =>
{
    let sql='select*from training   ';

    if(req.query.id)
    {
        sql=sql  +'where id ='+req.query.id;
    }
    if(req.query.syllabus)
    {
       sql='select * from employees where syllabus =?';
       connection.query(sql,[req.query.syllabus],(err,data) =>{
           if(err)
           {
               res.send(err);
           }
           res.send(data);
       });
    }
    if(req.query.total_days)
    {
        sql=sql  +'where total_days='+req.query.total_days;
    }
    connection.query(sql, function(err, data, fields){
        if(err)
        {
            res.status(500);
            let errMsg={
                error:err
            }
            res.send(errMsg);
        }
        let responseObject ={
            data:data
        }
        res.send(responseObject);

    })
});

app.listen(port, () =>{
    console.log("server started")
});