const fs = require('fs');
const util = require('util');


const unlinkAsync = util.promisify(fs.unlink);


async function deleteFile(filePath) {
    try {
        await unlinkAsync(filePath);
        console.log(` File deleted: ${filePath}`);
    } catch (err) {
        console.error(` Error deleting file: ${err.message}`);
    }
}


deleteFile('hello.txt'); 
