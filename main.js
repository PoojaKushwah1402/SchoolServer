const express= require('express');
const bodyParser = require('body-parser')
var mail=require('nodemailer');
const jsonParser = bodyParser.json();
const app= express();
const port = 4000;

var transport = mail.createTransport({
    service : 'gmail',
    auth : {
      user : 'from@gmail.com',
      pass : 'password'
    }
  });

app.use(express.static('src'));

app.listen(port,function(){
  console.log(`Server listining on port ${port}`)
});

app.put('/query',jsonParser,function(req,res){
const query=req.body;
console.log(query);
var resp=sendmail(query);
if(resp=='-1')
{
    var response = {
        success: true,
        msg: 'Msg not send'
    }   
}
else
{
    var response = {
    success: true,
    msg: 'Query submitted successfully'
}
}
res.json(response);
});


function sendmail(query)
{
    var mailoption = {
        from : 'from@gmail.com',
        to : 'tomail@gmail.com',
        subject : `${query.Subject}`,
        text : `Hi my msg is this : ${query.Msg} please contact me on this : ${query.Mob} and ${query.Email}`
    };
    
    transport.sendMail(mailoption, function (err, info){
        if(err)
        {
            console.log(err);
            return '-1';
        }
        else
        {
            console.log('Email sent '+info.response);
            return info.response;
        }
    }); 
}