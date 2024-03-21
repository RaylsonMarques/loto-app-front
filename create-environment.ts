const { writeFile } = require('fs');
const { argv } = require('yargs');

const isProduction = process.env.ENVIRONMENT === 'prod';
const targetPath = `./src/environments/environment.ts`;

if (isProduction === true) {
    require('dotenv').config({path:__dirname+'/.env'});
} else {
    require('dotenv').config({path:__dirname+'/./../.env'});
}

const environmentFileContent = `
export const environment = {
    production: ${isProduction},
		hostApiUrl: 'api/loto-app',
		API_HOST: '${process.env.API_HOST}'
};
`;

// write the content to the respective file
writeFile(targetPath, environmentFileContent, function (err) {
    if (err) {
        console.log(err);
    }
    console.log(`Variaveis de ambiente escritas no arquivo ${targetPath}`);
});
