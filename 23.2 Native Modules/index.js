const fs = require("fs");

// fs.writeFile("message3.txt", "Hello engineer" ,(err)=> {
//     if (err) throw err;
//     console.log("file saved");
// })

fs.readFile("message2.txt", "utf8", (err,data)=> {
    if (err) throw err;
    console.log(data);
})