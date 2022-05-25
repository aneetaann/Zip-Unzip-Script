const AdmZip = require("adm-zip");
const path = require("path");

var filepath = './test'

if (path.extname(filepath) == '.zip'){                                             // unzipping zip file
    async function extractZip(filepath) {
        try {
            const zip = new AdmZip(filepath);
            const outputDir = `${path.parse(filepath).name}_extracted`;
            zip.extractAllTo(outputDir);
            console.log(`Extracted to "${outputDir}" Successfully`);
        } catch (e) {
        console.log(`There is an error. ${e}`);
        }
    }
extractZip(filepath);                                                              // "./test.zip"
}
else{                                                                              // zipping folder/files
    async function createZip() {
        try {
            const zip = new AdmZip();
            const outputFile = "test.zip";
            zip.addLocalFolder(filepath);                                         // "./test" directory. To consider only one file from directory then use zip.addLocalFile(filepath)
            zip.writeZip(outputFile);
            console.log(`Created ${outputFile} Successfully`);
        } catch (e) {
        console.log(`An Error has occurred. ${e}`);
        }
    }
createZip();
}

