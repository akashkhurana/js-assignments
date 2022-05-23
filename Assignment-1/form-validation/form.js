function validation() {

    var user = document.getElementById('user').value;
    var password = document.getElementById('password').value;
    var Confirmpassword = document.getElementById('Confirmpassword').value;
    var mobilenumber = document.getElementById('mobilenumber').value;
    var email = document.getElementById('email').value;


    if (user == "") {
      document.getElementById('username').innerHTML =" ** Please fill the UserName field";
      return false;
    }
     if ((user.length <=2)  ||  (user.length >=20)) {
      document.getElementById('username').innerHTML =" ** user name should be between 2 to 20 characters "
    }else if (!isNaN(user)) {
      document.getElementById('username').innerHTML = " ** Only Characters are allowed"

    }


    if (password == "") {
      document.getElementById('passwordid').innerHTML =" ** Enter Password"
      return false;
    }else if (password == user) {
      document.getElementById('passwordid').innerHTML =" ** Password cant'be your FirstName or LastName"
      return false;
    }else if ((password.length <=6)  ||  (password.length >=20)) {
      document.getElementById('passwordid').innerHTML =" ** user password should be between 6 to 20 characters "
      return false;
    }

    if (Confirmpassword == "") {
      document.getElementById('Confirmpasswordid').innerHTML =" ** Enter ConfirmPassword"
      return false;
    }else if (password!= Confirmpassword) {
      document.getElementById('Confirmpasswordid').innerHTML =" ** Password does'nt Match"
      return false;
    }

    if (mobilenumber == "") {
      document.getElementById("MobileNumberid").innerHTML =" ** Enter Mobile Number";
      return false;
    }else if(mobilenumber.length!=10){
      document.getElementById("MobileNumberid").innerHTML =" ** Mobile Number Should be 10 digit "
      return false;
    }else if (isNaN(mobilenumber)) {
      document.getElementById('MobileNumberid').innerHTML =" ** Only digit are Accepted"
      return false;
    }


    if (email == "") {
      document.getElementById('emailid').innerHTML = " ** Enter Email ID"
      return false;
    }else if (email.indexOf('@') <= 0) {
      document.getElementById('emailid').innerHTML = " **  @ Invalid Position"
      return false;
    }else if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')){
      document.getElementById('emailid').innerHTML = " **  . Invalid Position"
      return false;
    }


  }