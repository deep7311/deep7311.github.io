const createForm = document.getElementById("create-account-form");
if (createForm) {
  createForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const userData = {
      username: username,
      email: email,
      password: password,
    };

    localStorage.setItem("userData", JSON.stringify(userData));
    alert("Account created");
    window.location.href = "./login.html";
  });
}

const loginForm = document.getElementById("login-form");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const enteredUsername = document.getElementById("username").value;
    const enteredPassword = document.getElementById("password").value;

    const storedUser = JSON.parse(localStorage.getItem("userData"));

    if (!storedUser) {
      alert("No account");
      return;
    }

    if (
      enteredUsername === storedUser.username &&
      enteredPassword === storedUser.password
    ) {
      alert("Login successful");
    } else {
      alert("Invalid username or password.");
    }
  });
}
