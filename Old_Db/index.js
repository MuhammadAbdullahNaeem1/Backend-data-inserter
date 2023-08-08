// // npm init -y

// // npm install express mongoose cors body-parser

// const express = require('express');
// const connectionDB = require('./db');
// const app =express();
// const port = 3000;
// app.listen(port,()=>{

//     console.log(`Server is listening on port: ${port}`);
// })

// connectionDB();


const express = require('express');
const connectionDB = require('./db');
const app =express(0);
const port = 3000;
app.listen(port,()=>{

    console.log(`Server is listening on port: ${port}`);
})

connectionDB();
