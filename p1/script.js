// create login form function
const loginForm = () => {
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
            <button onclick="showHome()">Login</button>
        </p>
        <p>
            <button onclick="registerForm()">Not an Account? Create Account</button>
        </p>
    </div>`;

    root.innerHTML = str;
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
            <button onclick="loginForm()">Submit</button>
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
