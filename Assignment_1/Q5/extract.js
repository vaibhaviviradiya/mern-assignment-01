
const fs = require('fs');
const unzipper = require('unzipper');
const path = require('path');

const zipPath = path.join(__dirname, 'myfolder.zip');
const extractTo = path.join(__dirname, 'extracted');

if (!fs.existsSync(extractTo)) {
    fs.mkdirSync(extractTo);
}


fs.createReadStream(zipPath)
    .pipe(unzipper.Extract({ path: extractTo }))
    .on('close', () => {
        console.log(` Extraction complete to: ${extractTo}`);
    })
    .on('error', (err) => {
        console.error(' Error extracting zip:', err);
    });
