const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const config = require('./config/config.json');

const port = config.port || 3000;
const htmlFilePath = config.htmlFilePath || 'C:/Users/dvaru/Downloads/eco way finder/Eco way finder.html';
const staticFilesPath = 'C:/Users/dvaru/Downloads/eco way finder/Eco way finder_files';

app.get('/', (req, res) => {
  if (fs.existsSync(htmlFilePath)) {
    res.sendFile(path.resolve(htmlFilePath));
  } else {
    res.status(500).send('HTML file not found.');
  }
});

// Serve all files in the 'Eco way finder_files' folder
app.use('/static', express.static(staticFilesPath));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
