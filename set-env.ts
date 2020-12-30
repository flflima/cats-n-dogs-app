const fs = require('fs');
const colors = require('colors');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

let targetPath = './src/environments/environment.prod.ts';
let isProductionEnvironment = true;

if (process.env.NODE_ENV === 'development') {
  targetPath = './src/environments/environment.ts';
  isProductionEnvironment = !isProductionEnvironment;
}

const envConfigFile = `export const environment = {
    catsBaseUrl: '${process.env.API_SERVICES_CATS}',
    dogsBaseUrl: '${process.env.API_SERVICES_DOGS}',
    nodeEnv: '${process.env.NODE_ENV}',
    production: ${isProductionEnvironment}
  };
`;

fs.writeFile(targetPath, envConfigFile, (err: any) => {
  if (err) {
    throw console.error(err);
  } else {
    console.log(colors.magenta(`Angular environment.ts file generated correctly at ${targetPath} \n`));
  }
});

