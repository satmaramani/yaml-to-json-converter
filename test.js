const readYamlFile = require("./index");

const filePath = "deeply-nested.yaml";
const jsonData = readYamlFile(filePath);

console.log(JSON.stringify(jsonData, null, 2));

if (jsonData) {
  const dbHost = jsonData.app.database.host;
  console.log("Database Host:", dbHost);

  console.log(
    "Database credentials username :",
    jsonData.app.database.credentials.username
  );

  console.log(
    "UNDEFINED exampel services auth URL => :",
    jsonData.app.services.auth.url.sdf
  );
}
