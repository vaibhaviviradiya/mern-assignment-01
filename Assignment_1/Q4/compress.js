// compress.js

const fs = require('fs');
const archiver = require('archiver');
const path = require('path');

// Define folder to zip and output file
const sourceDir = path.join(__dirname, 'myfolder');
const outputZip = path.join(__dirname, 'myfolder.zip');

// Create a file to stream archive data to
const output = fs.createWriteStream(outputZip);
const archive = archiver('zip', { zlib: { level: 9 } }); 

output.on('close', () => {
    console.log(`Zip created: ${outputZip} (${archive.pointer()} total bytes)`);
});

archive.on('error', (err) => {
    throw err;
});

archive.pipe(output);


archive.directory(sourceDir, false); 
archive.finalize();
    