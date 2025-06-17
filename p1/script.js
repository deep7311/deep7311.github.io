// creating global variable for storing the user
let users = []

const validateUser = () => {
    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;

    // check karna hai ki user exist karta hai ya nahi
    const foundUser = users.find(u => u.name === username && u.password === password);
    
    if (foundUser) {
        showHome();
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

// create login form function
const loginForm = () => {

    let usersList = '';

    if (users.length === 0) {
        usersList = `<p>No users registered yet.</p>`;
    } else {
        usersList = `<ul>` + users.map(user => `<li>username: ${user.name} (password: ${user.email})</li>`).join('') + `</ul>`;
    }

    const str = `<div>
        <h2>Login Form</h2>
        <p>
            <label>Username:</label><br>
            <input type="text" id="login-username" placeholder="Enter Username">
        </p>
        <p>
            <label>Password:</label><br>
            <input type="password" id="login-password" placeholder="Enter Password">
        </p>
        <p>
            <button onclick="validateUser()">Login</button>
        </p>
        <p>
            <button onclick="registerForm()">Not an Account? Create Account</button>
        </p>

        
        
    </div>
    <div>
        <h3>Registered Users:</h3>
        ${usersList}
    </div>`;

    root.innerHTML = str;
}

// function to save user details
// and add to users array
const saveUser = () => {
    let name = document.getElementById("register-username").value;
    let email = document.getElementById("register-email").value;
    let password = document.getElementById("register-password").value;
    let user = {};
    user.name = name;
    user.email = email;
    user.password = password;
    users.push(user);
    loginForm();
}

// create register form function
const registerForm = () => {
    const str = `<div>
        <h2>Create Account</h2>
        <p>
            <label>Username:</label><br>
            <input type="text" id="register-username" placeholder="Enter Username">
        </p>
        <p>
            <label>Email:</label><br>
            <input type="email" id="register-email" placeholder="Enter Email">
        </p>
        <p>
            <label>Password:</label><br>
            <input type="password" id="register-password" placeholder="Enter Password">
        </p>
        <p>
            <button onclick="saveUser()">Submit</button>
        </p>
        <p>
            <button onclick="loginForm()">Already an Account? Login here...</button>
        </p>
    </div>`;

    root.innerHTML = str;
}

// create show home form function
const showHome = () => {
    const str = `<div>
        <h2>Welcome</h2>
        <p><button onclick="loginForm()">Logout</button></p>
    </div>`;

    root.innerHTML = str;
}
