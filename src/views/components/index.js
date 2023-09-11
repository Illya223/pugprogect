const url = "https://api.byteplex.info/api/test/contact/";



namesend = document.getElementById("name");
var name1 = namesend.value;
var emailsend = document.getElementById("email");
var email = emailsend.value;
var messagesend = document.getElementById("message");
var message = messagesend.value;
var button = document.getElementById("button");





async function send(method, url, body){

    const headers = {
        'Content-Type': 'application/json'
    }

   const v = await fetch(url,{
        method: method,
        mode: "cors", 
        cache: "no-cache",
        body: JSON.stringify(body),
        headers: headers
    })
    return v;
    }       


const body = {
    "name": [
        name1
    ],
    "email": [
        email
    ],
    "message":[ 
        message
    ]
};

button.addEventListener("click", (event)=>{
 send('POST', url, body)
        .then(data => console.log(data))
        .catch(err => console.log(err))
})  


console.log(body)

    



