function sendquery()
{
 
    var query={};

    var Fname=document.forms["Form1"]["FirstName"].value;
    var Lname=document.forms["Form1"]["LastName"].value;
    var Mobile=document.forms["Form1"]["Moble"].value;
    var email=document.forms["Form1"]["Email"].value;
    var Message=document.forms["Form1"]["message"].value;
    var sub=document.forms["Form1"]["drodown"].value;

    query.Name=[Fname,Lname].filter(Boolean).join(" ");
    query.Mob=Mobile;
    query.Email=email;
    query.Msg=Message;
    query.Subject=sub;
   
    console.log(query);
    sendMail(query);
}

