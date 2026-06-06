// Initialise the saved credentials

const credentials=["kamalarabx@gmail.com","Landy2009"];

// Now Take The User input and validate them
function authenticateuser(credentials,email,password){
if (email===credentials[0]&& password===credentials[1]){
    return true
    
}else{
    for(let counter=1; counter<=3; counter++){
        let email=prompt("Enter your email again:");
        let password=prompt("Enter your password again:");
        if(email===credentials[0]&& password===credentials[1]){
            return true;
            break
        }
        
    }
    return false;
}
}

let useremail=prompt("Enter your email");
let userpassword=prompt("Enter password");

let a = authenticateuser(credentials,useremail,userpassword);
console.log(a);