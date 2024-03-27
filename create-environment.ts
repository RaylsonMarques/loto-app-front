const { writeFile } = require("fs");
const { argv } = require("yargs");

const isProduction = process.env.ENVIRONMENT === "prod";
const targetPath = `./src/environments/environment.ts`;

// if (isProduction === true) {
// 	require("dotenv").config();
// } else {
// }
require("dotenv").config();

const environmentFileContent = `
export const environment = {
    production: ${isProduction},
		hostApiUrl: '/api',
		API_HOST: '${process.env.API_HOST}',

		ANGULAR_PROXY_HOST_API: '${process.env.ANGULAR_PROXY_HOST_API}'
};
`;

// write the content to the respective file
writeFile(targetPath, environmentFileContent, function (err) {
	if (err) {
		console.log(err);
	}
	console.log(`Variaveis de ambiente escritas no arquivo ${targetPath}`);
});
