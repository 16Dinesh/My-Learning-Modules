const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'rest-api');

const folders = [
  'config',
  'models',
  'controllers',
  'routes',
  'middlewares',
  'utils'
];

const files = [
  'server.js',
  'package.json',
  '.env',
  'config/db.js',
  'models/user.model.js',
  'controllers/user.controller.js',
  'routes/user.routes.js',
  'middlewares/error.middleware.js',
  'utils/logger.js'
];

if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir);
  console.log(`Created: ${baseDir}`);
}

folders.forEach(folder => {
  const dirPath = path.join(baseDir, folder);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
    console.log(`Created: ${dirPath}`);
  }
});

files.forEach(file => {
  const filePath = path.join(baseDir, file);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '');
    console.log(`Created: ${filePath}`);
  }
});

console.log('Project structure created successfully!');
