const path = require('path');

module.exports = {
   entry: './src/index.js', // primeiro arquvio a ser processado
   // saída
   output: {
      filename: 'main.js', // Arquivo gerado a partir do index.js, podendo ser qualquer nome.js
      path: path.resolve(__dirname, 'dist') // Local onde o arquivo main.js será salvo
   }
}