const request = require('request'); // importing request used for getting website information
const fs = require('fs');           // importing fs for the filewritting
const url = process.argv[2];          // assinging the console input to vars that will be used in fetcher
const downloadLocal = process.argv[3];

const urlGrabby = function(url, callback) { // gets the url and uses requests get and assigns the returned information to body
  request(url, (error, response, body) => { // after it recieves and assigns it passes body on to the callback so write can access it
    callback(body); 
  });
};

const write = function(data, callback) { // write is then called and uses body as its data
  fs.writeFile(downloadLocal, data, (err) => { // after it writes the data using the global scope var downloadLocal it calls the final callback
    callback();
  });
};

function fetcher(url, downloadLocal) { // the main function that ties the program together
  urlGrabby(url, (body) => { //first calls the function that grabs the url
    write(body, () => { //passes on body after the callback
      console.log('File size:', body.length, 'bytes'); // the final callback which occurs after write has finished
      console.log('File location:', downloadLocal);
    });
  });
}



fetcher(url, downloadLocal);



//use request for getting information from websites
//use node fs.writeFile to write that information to a specified path
// the program should have two inputs that is taken from the console
// the first input will be based around request and tying the user input to where it gets its data from
// the second input will be tyed to fs.write file and where the file will be written too
//finally a console log must be made stating how large the file is and the location of the download