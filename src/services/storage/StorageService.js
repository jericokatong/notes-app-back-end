const { rejects } = require('assert');
const { error } = require('console');
const fs = require('fs');
const { resolve } = require('path');

class StorageService {
  constructor(folder) {
    this._folder = folder;

    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder, { recursive: true });
    }
  }

  writeFile(file, meta) {
    const filename = +new Date() + meta.filename;
    const path = `${this._folder}/${filename}`;

    const filestream = fs.createWriteStream(path);

    return new Promise((resolve, rejects) => {
      filestream.on('error', (error) => rejects(error));
      file.pipe(filestream);
      file.on('end', () => resolve(filename));
    });
  }
}

module.exports = StorageService;
