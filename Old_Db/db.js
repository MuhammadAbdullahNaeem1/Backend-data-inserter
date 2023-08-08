// const mongoose = require('mongoose');

// const URL = 'mongodb://localhost:27017';


// const connectionDB = async ()=>{
// try{
// // await mongoose.connect(URL);


// await mongoose.connect(URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,

// });
// console.log("Database Connected");

// }
// catch (error) {
//     console.log("Failed to connect:", error.message);
// }
// }
// module.exports = connectionDB;
const mongoose = require('mongoose');
const URL = 'mongodb://localhost:27017';


const connectionDB = ()=>{
try{
// await
mongoose.connect(URL);
console.log("Database Connect");
}
catch{

console.log("failed to connect");

}
}
module.exports = connectionDB;