function validateForm() {  
    //collect form data in JavaScript variables  
    var pw1 = document.getElementById("pswd1").value;  
    var pw2 = document.getElementById("pswd2").value;  
  
    
    
    //check empty password field  
    if(pw1 == "") {  
      document.getElementById("message1").innerHTML = "**Fill the password please!";  
      return false;  
    }  
     
     
    //minimum password length validation  
    if(pw1.length < 8) {  
      document.getElementById("message1").innerHTML = "Password length must be atleast 8 characters";  
      return false;  
    }  
    else{
        document.getElementById("message1").innerHTML = "";
    }
  
    //maximum length of password validation  
    if(pw1.length > 15) {  
      document.getElementById("message1").innerHTML = "Password length must not exceed 15 characters";  
      return false;  
    }  
    
    if(pw1 != pw2) {  
      document.getElementById("message2").innerHTML = "Passwords are not same";  
      return false;  
    } else { 
        document.getElementById("message2").innerHTML = "";   
      alert ("You Succesfully Registered");  
    }  
 }  