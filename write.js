const fs = require("fs");

console.log("1. Background running first");

fs.writeFileSync("write.txt", "hello from write.js","utf-8");
console.log("2.file written sync mannered");

console.log("3. code foe asyn lah aaba");;

fs.writeFile('write.txt', "hello from async write.js", 'utf-8',(err) =>
{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("asyn daataa also added hurrayyy");
    }
});

console.log("4. just wrote the asycc portion yayyyy");
