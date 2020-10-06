'use strict';
const fs = require('fs');
const fileName = './test.txt';
(async () => {
    for (let count = 0; count < 30; count++) {
        await fs.appendFile(fileName, 'おはようございます\n', 'utf8', () => { });
        await fs.appendFile(fileName, 'こんにちは\n', 'utf8', () => { });
        await fs.appendFile(fileName, 'こんばんは\n', 'utf8', () => { });
    }
})();