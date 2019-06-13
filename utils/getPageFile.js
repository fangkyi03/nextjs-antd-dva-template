const fs = require('fs');
const path = require('path');
const filePath = './pages';
const files = fs.readdirSync(filePath);
const filesArr = [];
files.forEach((file) => {
    const fileState = fs.statSync(path.join(filePath, file))
    if (fileState.isDirectory()) {
        filesArr.push(file)
    }
});


module.exports = filesArr