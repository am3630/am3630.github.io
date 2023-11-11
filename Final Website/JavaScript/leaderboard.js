function userinput() {
    // creating the object
    var holdObject = {};
    // holding object from leaderboard
    holdObject.username = document.getElementById("adduser").value;
    holdObject.score = document.getElementById("addscore").value;

    localStorage[holdObject.username] = JSON.stringify(holdObject);
    // storing user score in json
}
