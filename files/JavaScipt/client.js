//An async function will return a different reference,
async function blog() {
  // returns the first element that match the id in HTML
  const Title = document.querySelector("#Titleid").value;
  const Description = document.querySelector("#Descriptionid").value;
  const users_id = document.querySelector("#usersid").value;
  // POST data to server
  const response = await fetch("/blog", {
    method: "POST",
    // the heading type
    headers: { "Content-Type": "application/json", },
    // in JSON format
    body: JSON.stringify({ Title: Title, Description: Description, users_id:users_id })
  });
  // awaiting response of the blog
  console.log(await response.json());

}// end of javascript
//An async function will return a different reference,
async function login() {
  const name = document.querySelector("#loggedinname").value;
  const email = document.querySelector("#loggedinemail").value;
  const password = document.querySelector("#loggedinPassword").value;
  // POST data to server
  const response = await fetch("/login", {
    method: "POST",
    // the heading type
    headers: { "Content-Type": "application/json", },
    // in JSON the name,email,password
    body: JSON.stringify({ name: name, email: email, password: password })
  });
  // awaiting response of the registered user
  const data = await response.json();
  console.log(data);

  if (data.Nowlogin) {
    // this is the storing of the no logged in users to local storage
    // calling a name from html
    localStorage.setItem("thenameis", name);
    // Redirect to the section of profile
    window.location.href = "index.html";
  } else {
    // Display an error message
    alert("Incorrect login details. Please try again.");
  }
}

//An async function will return a different reference,
  async function register() {
      // returns the first element that match the id in HTML
      const name = document.querySelector("#nameid").value;
      const email = document.querySelector("#emailid").value;
      const password = document.querySelector("#passwordid").value;
      // POST data to server
      const response = await fetch("/users", {
        method: "POST",
        // the heading type
        headers: { "Content-Type": "application/json", },
        // in JSON the name,email,password
        body: JSON.stringify({ name: name, email: email, password: password })
      });
      // awaiting response of the registerd user
      console.log(await response.json());

    }// end of javascript
