const folder = './';
const fs = require('fs');

fs.readdir(folder, (err, files) => {
    if (err)
      console.log(err);
    else {
      console.log("\nfiles in current directory");
      files.forEach(file => {
        console.log(file);
      })
    }
  })
