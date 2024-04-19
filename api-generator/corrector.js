const fs = require('fs');
const path = require('path');

const replaceInFiles = ({ dir, oldStr, newStr }) => {
    const baseDirectory = 'src/services/rest-api';
    const directory = `${ baseDirectory }/${ dir }/apis`; //apis  //entity

    // Read all files in the directory
    fs.readdirSync(directory).forEach(file => {
        const filePath = path.join(directory, file);
        // Check if the file is a directory
        if (fs.statSync(filePath).isDirectory()) {
            // Recursively call replaceInFiles for subdirectories
            replaceInFiles(filePath, oldStr, newStr);
        } else {
            // Replace occurrences of oldStr with newStr in the file
            let fileContent = fs.readFileSync(filePath, 'utf8');
            fileContent = fileContent.replace(new RegExp(oldStr, 'g'), newStr);
            fs.writeFileSync(filePath, fileContent, 'utf8');
        }
    });
}

const processCorrection = () => {
    const apiDomains = [ ...process.argv ].slice(2);
    console.log('===================================================')
    console.log('=== Process Correction ============================')
    console.log('===================================================')
    for(const apiName of apiDomains) {
        replaceInFiles({ dir: apiName, oldStr: `UNKNOWN_PARAMETER_NAME\\?: `, newStr: `xPortalToken?: string` });
        console.log(`[${ apiName }] Replacement parameter name complete`);

        replaceInFiles({ dir: apiName, oldStr: `\\{\\} \\[UNKNOWN_PARAMETER_NAME\\]`, newStr: `{string} [xPortalToken]` });
        console.log(`[${ apiName }] Replacement doctype complete`);

        replaceInFiles({ dir: apiName, oldStr: `UNKNOWN_PARAMETER_NAME`, newStr: `xPortalToken` });
        console.log(`[${ apiName }] Replacement variable name complete`);
    }
}

processCorrection();