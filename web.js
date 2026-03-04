function check(event)
{
        event.preventDefault(); //prevent relaoding page 

    const username = document.getElementById("username").value;
     const password = document.getElementById("password").value;

     if(username==="admin"&& password ==="admin")
     {
        document.getElementById("message").innerText="login sucess";
        document.getElementById("message").style.color="green";
    }
    else{
            document.getElementById("message").innerText="login failed";
        document.getElementById("message").style.color="red";
    
    }
}