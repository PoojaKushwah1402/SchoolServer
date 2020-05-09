function sendMail( query )
{   console.log(query);
    $.ajax({
        type: "PUT",
        data: JSON.stringify(query),
        contentType: 'application/json',
        url: "http://localhost:4000/query/" ,
        success: function (data) {
            alert(data.msg);
        }
    })
}





        
