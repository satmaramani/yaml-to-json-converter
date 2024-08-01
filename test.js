const {readYamlFile,readYamlContents} = require("./index");

const filePath = "deeply-nested.yaml";

//reading through file
const jsonData = readYamlFile(filePath);

console.log(JSON.stringify(jsonData, null, 2));

//to show nested element app -> database -> host (3 Level Example)
if (jsonData) {
  const dbHost = jsonData.app.database.host;
  console.log("\n Database Host app-> database -> host:", dbHost);
}

//to show nested element app-> database -> credentials -> username (4 Level Example)
if (jsonData) {
  console.log(
    "\n Database credentials username app-> database -> credentials -> username :",
    jsonData.app.database.credentials.username
  );
}

//to show nested element app-> services -> auth -> url -> sdf (5 Level Example)
if (jsonData) {
  console.log(
    "\n UNDEFINED example services auth URL => :",
    jsonData.app.services.auth.url.sdf
  );
}

//to show nested element app-> services -> payment -> endpoints -> statusdeep1 -> statusdeep11 ->  statusdeep111key (7 Level Example)
if (jsonData) {
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

//reading through direct YAML contents 
const jsonData2 = readYamlContents(yamlContents);

//to Show 4 level YAML contents app-> database -> credentials -> username
if(jsonData2)
{
    console.log(
        "\n 2nd Example app-> database -> credentials -> username :",
        jsonData2.app.database.credentials.username
  );
}

//to Show 4 level YAML contents app-> name
if(jsonData2)
{
    console.log(
        "\n 2nd Example Showing app -> name :",
        jsonData2.app.name
  );  
}


  
