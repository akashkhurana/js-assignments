const fs = require('fs');

const data = fs.readFileSync('./sample1.txt',
            {encoding:'utf8', flag:'r'});

let wordCount = data.trim().split(/\s+/).length;

let lineCount = data.split("\n").length;

let stats = fs.statSync('./sample1.txt');

let output = 'Size of file in bytes : ' + stats.size + '\n' + 
         'Total words in the File : ' + wordCount + '\n' + 
         'Total lines in the File : '+ lineCount;

fs.writeFile('./output.txt', output, err => {
    if (err) {
      console.error(err);
    }
  });