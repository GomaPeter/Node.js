// This line import the built-in node.js module called "fs"
const fs = require("fs");


// This code defines the variable and assign the value "welcome.txt"
const filename = "welcome.txt";

// This conditional statement checks if the named file exist in the current directory
if(!fs.existsSync(filename)) {
    fs.writeFileSync(filename, "Hello Node");
}

// This line read the content of the "welcome.txt" and store it in the "data" variable
const data = fs.readFileSync(filename, "utf8")


// This line log the content of the "welcome.txt" and will print "hello Node"
console.log(data);