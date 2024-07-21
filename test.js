const {readYamlFile,readYamlContents} = require("./index");

const filePath = "deeply-nested.yaml";

//reading through file
const jsonData = readYamlFile(filePath);

console.log(JSON.stringify(jsonData, null, 2));

if (jsonData) {
  const dbHost = jsonData.app.database.host;
  console.log("\n Database Host app-> database -> host:", dbHost);

  console.log(
    "\n Database credentials username app-> database -> credentials -> username :",
    jsonData.app.database.credentials.username
  );

  console.log(
    "\n UNDEFINED example services auth URL => :",
    jsonData.app.services.auth.url.sdf
  );

  console.log(
    "\n SUPER DEEP NESTED 7  Level app -> services -> payment -> endpoints -> statusdeep1 -> statusdeep11 -> statusdeep111key :",
    jsonData.app.services.payment.endpoints.statusdeep1.statusdeep11.statusdeep111key
  );  

}
const yamlContents = 
`app:
  name: MyApp
  version: 1.0.0
  environment: production
  database:
    host: localhost
    port: 5432
    name: myapp_db
    credentials:
      username: user123
      password: pass123
`;
//reading through contents 
const jsonData2 = readYamlContents(yamlContents);

console.log(
    "\n 2nd Example app-> database -> credentials -> username :",
    jsonData2.app.database.credentials.username
  );


  console.log(
    "\n 2nd Example Showing app -> name :",
    jsonData2.app.name
  );  


  
