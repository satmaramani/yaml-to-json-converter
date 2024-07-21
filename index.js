const fs = require("fs");
const yaml = require("yaml");

/**
 * Reads a YAML file and parses it into a JSON object.
 * @param {string} filePath - Path to the YAML file.
 * @returns {Object} - Parsed JSON object.
 */
function readYamlFile(filePath) {
  try {
    const fileContents = fs.readFileSync(filePath, "utf8");
    const data = yaml.parse(fileContents);
    return data;
  } catch (error) {
    console.error("Error reading or parsing the YAML file:", error);
    return null;
  }
}

function readYamlContents(contents) {
    try {
      const data = yaml.parse(contents);
      return data;
    } catch (error) {
      console.error("Error reading or parsing the YAML file:", error);
      return null;
    }
  }

module.exports = {readYamlFile, readYamlContents};
