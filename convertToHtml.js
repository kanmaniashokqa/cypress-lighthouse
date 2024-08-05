const fs = require('fs').promises;
const path = require('path');

async function convertJsonToHtml(jsonFilePath) {
  try {
    // Read the JSON file
    const jsonReport = JSON.parse(await fs.readFile(jsonFilePath, 'utf8'));
    
    // Dynamically import the ReportGenerator
    const { ReportGenerator } = await import('lighthouse/report/generator/report-generator.js');
    
    // Generate HTML report
    const html = ReportGenerator.generateReportHtml(jsonReport);
    
    // Create output file name
    const baseNameWithoutExtension = path.basename(jsonFilePath, '.json');
    const outputPath = path.join(path.dirname(jsonFilePath), `${baseNameWithoutExtension}.html`);
    
    // Write HTML report to file
    await fs.writeFile(outputPath, html);
    
    console.log(`HTML report generated: ${outputPath}`);
  } catch (error) {
    console.error('Error converting JSON to HTML:', error);
  }
}

// Usage example
const jsonFilePath = path.join(__dirname, 'cypress', 'reports', 'lighthouse-1722849846595.json');
convertJsonToHtml(jsonFilePath);
