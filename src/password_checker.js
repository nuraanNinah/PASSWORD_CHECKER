
let condition1 = /[a-z]/;
let condition2 = /[A-Z]/;
let condition3 = /[@#$%&]/;
let condition4 = /[0-9]/;

password = "Arya2018!";

function passwordIsValid(password) {
    // password = "Arya2018!";
  try {
    if (password == !"") {
      throw "password should exist";
    }
     else if (password.length <= 8) {
        throw "password should be longer than than 8 characters";
    }
      else if (!password.match(condition1) == null) {
         throw "password should have at least one lowercase letter";
    }
      else if (!password.match(condition2) == null) {
          throw "password should have at least one uppercase letter";
    }
      else if (!password.match(condition3) == null) {
          throw "password should have at least one symbol";
    }
      else if (!password.match(condition4) == null) {
          throw "password should have at least one digit";
    } else {
      return "Password is valid";
    } 
  }
  catch (error) {
    console.log("error" + error);
  

}
}
console.log(passwordIsValid("Arya2018!"));

//check if password is ok
function passwordIsOk(password) {
  // let password = "Arya2018!";

  if ((password.toString() !== "") && (password.toString().length >= 9)) {

    if (((!password.match(condition1) || !password.match(condition2) || !password.match(condition3) || !password.match(condition4)))) {
      return true;
  }

    return false;
  }
}
console.log(passwordIsOk("Arya2018!"));


function password_is_valid(a){

    let StrongPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

   let CheckValidPassword = StrongPassword.test(a);
    try{
        if(CheckValidPassword == false)
            throw new Error (" your password should be a Strong password with one LowerCase,UpperCase and Number, `9` characters above");        
        }
    catch(err){
        console.log("you have an "+err);
    }
    return CheckValidPassword;
}

// console.log(passwordIsValid("Arya2018!"));

module.exports = { passwordIsValid, passwordIsOk}
 