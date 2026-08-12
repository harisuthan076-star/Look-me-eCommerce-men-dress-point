var LoginBtn = document.getElementById("loginBtn");
var RegisterBtn = document.getElementById("registerBtn");
var Login = document.getElementById("login");
var Register = document.getElementById("register");


function login(){  
    LoginBtn.className += " SignIn";
    RegisterBtn.className += "btn";
    Login.style.left = "4px";
    Register.style.right = "-520px";
    Login.style.opacity = 1;
    Register.style.opacity = 0;
}

function register(){
    LoginBtn.className += "btn";
    RegisterBtn.className += " SignIn";
     Login.style.left = "-510px";
    Register.style.right = "5px";
    Login.style.opacity = 0;
    Register.style.opacity = 1;
}



function submit(){
    let Email = document.getElementById("e_mail").value;
    let Password = document.getElementById("pass_word").value;
    let Message  = document.getElementById("alert");

    let web_Email = "Look@me123@gmail.com";
    let web_code = "Lookme123";

    if( Email == web_Email && Password == web_code){
        window.location = "INDEX 1.HTML";
    }

    else if ( Email == "" && Password ==""){
        alert(" Fields Cannot be empty!  ");
    }

    else if ( Email !== web_Email || Password == web_code){
        alert(" Please check your email or password  ");
    }
    
    else if ( Email == web_Email && Password !== web_code){
        alert(" Please check your email or password  ");
    }
    else if ( Email !== web_Email && Password !== web_code){
        alert(" Please check your email or password  ");
    }
}

function sub(){
    
    let Fname = document.getElementById("F-name").value;
    let Lname = document.getElementById("L-name").value;
    let E_mail = document.getElementById("E-mail").value;
    let P_word = document.getElementById("pass-word").value;

    let website_email = "Lookatme123@gmail.com";

   

    if( Fname == "" && Lname == "" && E_mail == "" && P_word == ""){
        alert ("Fields cannot be empty");
    }
    else if( Fname.length < 20 && Lname.length < 20 && E_mail == website_email && P_word.length >= 8 ){
        window.location = "INDEX 1.HTML";
    }

    else if( Fname.length < 20 && Lname.length < 20 && E_mail !== website_email || P_word == ""  ){
      alert (" Incorrect Email or Password");
      alert ("Password must me above 8 letters include with special Characters ");
    }
    
    else if( Fname.length < 20 && Lname.length < 20 && E_mail == website_email && P_word.length >! 8 ){
      alert (" Incorrect Email or Password");
      alert ("Password must me above 8 letters include with special Characters ");
    }

    /*switch(P_word){
        case "@":
            case "#":
                case "$":
                    case "&":
                        case "*":
                            case "%":
                                case "-":
                                    case "_":
                                        window.location = "INDEX 1.HTML";
                                        break;
                                    default:
                                        alert("Password must me include special Characters"); 
                                        break;     
                                     

    }*/ 


}









