// const express = require('express');
// const path = require('path');
// const app = express();
// // Serve static files from the Angular build directory
// app.use(express.static(path.join(__dirname, 'myDemoApp/browser')));
// // Handle API routes
// app.get('/api', (req, res) => {
//   res.send('API works');
// });
// // For all other requests, serve the Angular index.html
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'myDemoApp/browser/index.html'));
// });
// const port = process.env.PORT || 8080;
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });


const express = require('express');
var bodyParser  = require('body-parser');
const app = express(),
      port = 8080;

const users = [];

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static(process.cwd()+"/myDemoApp/browser/"));

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.post('/api/user', (req, res) => {
  const user = req.body.user;
  users.push(user);
  res.json("user addedd");
});

app.get('/', (req,res) => {
  res.sendFile(process.cwd()+"/myDemoApp/browser/index.html")
});

app.listen(port, (err) => {
   if(err) {
     console.log(err)
   }
    console.log(`Server listening on the port:!!!::${port}`);
});