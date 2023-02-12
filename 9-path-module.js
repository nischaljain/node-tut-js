const path = require("path");

//returns path seperator
console.log(path.sep);

const filePath = path.join("/content", "subfolder", "test.txt");
console.log(`filepath: ${filePath}`);

//getting base name
const base = path.basename(filePath);
console.log(base);

//absolute path
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
