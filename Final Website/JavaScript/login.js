function login() {

    let username = document.getElementById("adduser").value;
    let email = document.getElementById("addemail").value;
    let Name = document.getElementById("addname").value;

    // registered functions above

    if (localStorage[username] == undefined) {
        document.getElementById("loginincomplete").innerHTML = "Username either incorrect or blank please enter correct details";
        return;
    }
    // return username if incorrect or left blank

    if (localStorage[Name] == undefined) {
        document.getElementById("loginincomplete").innerHTML = "Name is either incorrect or blank please enter correct details";
        return;
    }
    // return phonenumber if incorrect or left blank
    if (localStorage[email] == '@') {
        document.getElementById("loginincomplete").innerHTML = "email either incorrect or blank please enter correct details";
        return;
    }
    // return email if incorrect or left blank
    else {

        let holdObject = JSON.parse(localStorage[username, email, Name]);
        let password = document.getElementById("addpass").value;

        if (password == holdObject.password) {
            // if all above is correct line 32 would be ran
            document.getElementById("TheLogin").innerHTML = holdObject.username + " is Logged in";
            document.getElementById("loginincomplete").innerHTML = "";
            sessionStorage.loggedinusername = holdObject.username;
        }
        else {
            document.getElementById("loginincomplete").innerHTML = "password either incorrect or blank please enter correct details";
        }
    }
}


