import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
const app = express();

app.use(express.json());

const users = []

const SECRET = "mysecretkey";

const isAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, SECRET);
    req.userRole = decoded.role;
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
};

const authorize = (req, res, next) => {
  try {
    if (req.userRole === "admin") {
      next();
    } else {
      res.status(403).json({ message: "Forbidden" });
    }
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
};

app.get("/home", (req, res) => {
  res.send("Home Page");
});


app.post("/register", async (req, res) => {
  const { email, pass, role } = req.body;
  const hashPassword = await bcrypt.hash(pass, 10);
  let user = {
    email,
    pass: hashPassword,
    role: role,
  };
  users.push(user);
  res.status(201).json({ message: "User registered successfully", user });
})

app.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  const userFound = users.find(
    (user) => user.email === email
  );
  const isMatch = await bcrypt.compare(pass, userFound.pass);
  if (isMatch) {
    const token = jwt.sign(
      {
        email: userFound.email,
        role: userFound.role,
      },
      SECRET,
      { expiresIn: "1h" }
    );
    res.status(200).json({ user: userFound, token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

app.get("/users", isAuth, authorize, (req, res) => {
  res.json(users);
});

app.listen(8080, () => {
  console.log("Server started");
});
