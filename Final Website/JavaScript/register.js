function userinfo() {
  // creating the object
  var holdObject = {};
  // holding object from hmtl
  holdObject.username = document.getElementById("adduser").value;
  holdObject.password = document.getElementById("addpass").value;
  holdObject.email = document.getElementById("addemail").value;
  holdObject.realname = document.getElementById("addname").value;
  // inserting neccessary information
  // store the user in JSON
  localStorage[holdObject.username] = JSON.stringify(holdObject);


  // after completed
  document.getElementById("ready").innerHTML = "<b>Registeration must be Complete!</b>"
  // recieve this when registration is complete

}
let feedbackPara = document.getElementById("feedback");
