# yaml-to-json-converter

A simple utility to convert deeply nested YAML files to JSON objects.

## Installation

```bash
npm install yaml-to-json-converter
```

#### Example Usage Code from client repo considering deeply-nested.yaml file below as a source yaml contents 

```plaintext
    
const {readYamlFile} = require("yaml-to-json-converter");

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

```

#### Example on reading direct YAML contents 

```
const {readYamlContents} = require("yaml-to-json-converter");

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
```

#### deeply-nested.yaml file contents for reference 

```plaintext

app:
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
  services:
    auth:
      url: http://auth.myapp.com
      endpoints:
        login: /login
        register: /register
        logout: /logout
    user:
      url: http://user.myapp.com
      endpoints:
        profile: /profile
        settings: /settings
    payment:
      url: http://payment.myapp.com
      endpoints:
        process: /process
        status: /status
  features:
    - name: FeatureA
      enabled: true
      settings:
        option1: value1
        option2: value2
    - name: FeatureB
      enabled: false
      settings:
        option1: value1
        option2: value2


```

#### Add a License

Create a `LICENSE` file with your chosen license. For example, the MIT License:

```plaintext
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
...