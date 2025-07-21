const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'example.txt');

fs.writeFile(filePath, 'Hello, this is the first line.\n', (err) => {
  if (err) throw err;
  console.log(' File written successfully.');

  fs.appendFile(filePath, 'This line was appended.\n', (err) => {
    if (err) throw err;
    console.log(' Data appended successfully.');

    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) throw err;
      console.log(' File content:');
      console.log(data);

      const newFilePath = path.join(__dirname, 'renamed-example.txt');
      fs.rename(filePath, newFilePath, (err) => {
        if (err) throw err;
        console.log(' File renamed successfully.');


        fs.unlink(newFilePath, (err) => {
          if (err) throw err;
          console.log(' File deleted successfully.');
        });
      });
    });
  });
});
