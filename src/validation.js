var flag=true;
function validateForm()
{
    var Fname=document.forms["Form1"]["FirstName"].value;
    var Mobile=document.forms["Form1"]["Moble"].value;
    var Message=document.forms["Form1"]["message"].value;
    var email=document.forms["Form1"]["Email"].value;
    var subject=document.forms["Form1"]["drodown"].value;

     Mobile=Number(Mobile);
    
     var name = validateFname(Fname);
     var mob = validateMobile(Mobile);
     var mail = validateEmail(email);
     var msg = validateMessage(Message);
     var sub = validateSubject(subject);

    if( name && mob && mail && msg && sub)
    {
        sendquery();
    }
    else
    {
        document.querySelector("h7").style.visibility="visible";
    }
    
    event.preventDefault();    
}

function validateFname(Fname)
{
    if(!Fname)
    {
        document.forms["Form1"]["FirstName"].style.border="1px solid red";   
        document.querySelector("p1").style.visibility="visible";
        
        return false;
    }
    else
    {
        document.forms["Form1"]["FirstName"].style.border="2px solid #c4d2e7";   
        document.querySelector("p1").style.visibility="hidden"; 
        document.querySelector("h7").style.visibility="hidden"; 
        return true;
    }
}

function validateSubject(subject)
{
    if(!subject)
    {
        document.forms["Form1"]["drodown"].style.border="1px solid red";   
        document.querySelector("p5").style.visibility="visible";
        
        return false;
    }
    else
    {
        document.forms["Form1"]["drodown"].style.border="2px solid #c4d2e7";   
        document.querySelector("p5").style.visibility="hidden"; 
        document.querySelector("h7").style.visibility="hidden"; 
        return true;
    }   
}


function validateMobile(Mobile)
{
    if(!Mobile )
    {
        document.forms["Form1"]["Moble"].style.border="1px solid red";   
        document.querySelector("p2").style.visibility="visible";  
     
        return false;
    }
    else
    {
        document.forms["Form1"]["Moble"].style.border="2px solid #c4d2e7";   
        document.querySelector("p2").style.visibility="hidden";  
        document.querySelector("h7").style.visibility="hidden";
        return true;
    }
}

function validateEmail(email)
{  var check = email.includes("@");
    if(!email || !check)
    {
        document.forms["Form1"]["Email"].style.border="1px solid red";  
        document.querySelector("p3").style.visibility="visible";  
        return false; 
    }
    else
    {
        document.forms["Form1"]["Email"].style.border="2px solid #c4d2e7";   
        document.querySelector("p3").style.visibility="hidden";  
        document.querySelector("h7").style.visibility="hidden";
        return true;
    }
}

function validateMessage(Message)
{
    if(!Message)
    {
        document.forms["Form1"]["message"].style.border="1px solid red";
        document.querySelector("p4").style.visibility="visible";
     
        return false;  
    }
    else
    {
        document.forms["Form1"]["message"].style.border="2px solid #c4d2e7";   
        document.querySelector("p4").style.visibility="hidden";  
        document.querySelector("h7").style.visibility="hidden";
        return true;
    }
}



var button=document.querySelector(".btn1");

button.addEventListener("click",function(){
    validateForm();
})




    


