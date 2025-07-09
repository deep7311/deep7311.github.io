import express from 'express';

const app = express();

// by default ye hamara virtual folder hai 'public' aur code run karne par phle yaha file check hogi ki index.html hai ya nhi isme
// app.use(express.static('public'));  

// ye bhi ek virtual folder hi hai par isko direct access nhi kar sakte hai
// isko access karne ke liye hume url me localhost:8080 ke baad /images/ dena jaruri hai
// app.use("/images", express.static('images'));

app.get('/products', (req, res) => {
    res.send('Product List');
});

app.listen(8080, () => {
    console.log('Server is running on port 3000');
});
