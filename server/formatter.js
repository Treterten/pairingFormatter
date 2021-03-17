const fs = require('fs');
const path = require('path');
module.exports = {
  formatPairs: () => {
    const sprintName = '';
    let result = ``;
    fs.readFile(path.resolve(__dirname, '../pairs.txt'), 'utf8', (err, data) => {
      const sprintName = data.substring(0, data.indexOf(':'));
      const pairs = data.split('\n');
      console.log(pairs);
      for (let i = 1; i < pairs.length; i += 1) {
        let pairing = pairs[i];
        if (pairing.indexOf('&') > -1) {
          let firstPair = pairing.substring(0, pairing.indexOf('&') - 1).trim();
          let secondPair = pairing.substring(pairing.indexOf('&') + 2)
          result += `### ${firstPair} + ${secondPair}\n[${sprintName}]-\n\n[${firstPair.substring(0, firstPair.indexOf(' '))}]-\n[${secondPair.substring(0, secondPair.indexOf(' '))}]-\n>Notes\n*\n\n`;
        } else {
          let pair = pairs[i].trim();
          result += `### ${pair} (Solo)\n[${sprintName}]-\n\n[${pair}]-\n>Notes\n*\n\n`;
        }
      }
      fs.writeFile('pairs.md', result, (err) => {
        if (err) {
          console.error(err);
        }
      })
    })
  }
}