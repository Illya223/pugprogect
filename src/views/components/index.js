const url = "https://api.byteplex.info/api/test/contact/";



namesend = document.getElementById("name");
var name1 = namesend.value;
var emailsend = document.getElementById("email");
var email = emailsend.value;
var messagesend = document.getElementById("message");
var message = messagesend.value;
var button = document.getElementById("button");
var burger = document.getElementsByClassName("head-burger")[0];
var menu = document.getElementsByClassName("menu")[0];

clickCounter = 0;

burger.addEventListener('click', function(){
    burger.classList.add("active")
    menu.classList.add("active")
    
    clickCounter++;
        if (clickCounter == 2) {
            burger.classList.remove("active")
    menu.classList.remove("active")
    clickCounter = 0;
    
        }
    
})




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

    



