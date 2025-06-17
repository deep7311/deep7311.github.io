// creating global variable for storing the user
let users = []
let currentUser = null;

const validateUser = () => {
    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;

    // check karna hai ki user exist karta hai ya nahi
    const foundUser = users.find(u => u.name === username && u.password === password);
    
    if (foundUser) {
        currentUser = foundUser;
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
        usersList = `<ul>` + users.map(user => `<li>username: ${user.name} (password: ${user.email}) amount: ${user.balance}</li>`).join('') + `</ul>`;
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
    user.balance = 1000;
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
        <h2>Welcome ${currentUser.name}</h2>
        <p>Your Current balance ${currentUser.balance}</p>
        <select id="transaction-type">
            <option value="deposit">Deposit</option>
            <option value="withdraw">Withdraw</option>
        </select>
        <p>
            <label>Amount:</label><br>
            <input type="text" id="transaction-amount" placeholder="Enter Amount">
            <button onclick="processTrans()">Submit</button>
        </p>
        <p><button onclick="loginForm()">Logout</button></p>
    </div>`;

    root.innerHTML = str;
}


const processTrans = () => {
    let transType = document.getElementById("transaction-type").value;
    let transAmount = parseFloat(document.getElementById("transaction-amount").value);

    if (!currentUser || isNaN(transAmount)) {
        alert("Invalid user or amount");
        return;
    }

    if (transType === "deposit") {
        currentUser.balance += transAmount;
    } else if (transType === "withdraw") {
        if (transAmount > currentUser.balance) {
            alert("Insufficient balance");
            return;
        }
        currentUser.balance -= transAmount;
    }

    showHome();
}