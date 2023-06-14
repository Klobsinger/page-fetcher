const request = require('request');
const fs = require('fs');


const fetcher = function(url,downloadLocal) {
  url = process.argv.slice(2)
  console.log(url)
}

//use request for getting information from websites
//use node fs.writeFile to write that information to a specified path
// the program should have two inputs that is taken from the console
// the first input will be based around request and tying the user input to where it gets its data from
// the second input will be tyed to fs.write file and where the file will be written too
//finally a console log must be made stating how large the file is and the location of the download

const urlGrabby = function(url, callback) {
  request(url, (error, response, body) => {
    
    
   
    callback(body);
  })
}
let data = body
urlGrabby('http://www.example.edu/')

const write = function(data, callback) {
fs.writeFile('./index.html', data, err => {

})
}
write()


const url = process.argv[2];
const downloadLocal = process.argv[3];

fetcher(url, downloadLocal);