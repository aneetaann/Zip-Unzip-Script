var zipper = require("zip-local");
const path = require('path');

if (path.extname('hello.txt') != '.zip'){
// zipping a file
zipper.zip("./hello.txt", function(error, zipped) {

    if(!error) {
        zipped.compress(); // compress before exporting

        var buff = zipped.memory(); // get the zipped file as a Buffer

        // save the zipped file to disk
        zipped.save("./package.zip", function(error) {
            if(!error) {
                console.log("zipped successfully !");
            }
        });
    }
});
}
else {
// unzipping a file
zipper.unzip("./package.zip", function(error, unzipped) {

    if(!error) {
        // extract to the current working directory
        unzipped.save(null, function() { });

        var unzippedfs = unzipped.memory();

        // print an array of file paths in the unzipped file
        console.log(unzippedfs.contents()); // prints [ 'hello.txt' ]

        // read the file as text
        var txt = unzippedfs.read("hello.txt", 'text');

        // or read it as Buffer
        var buff = unzippedfs.read("hello.txt", 'buffer');
    }
});
}

