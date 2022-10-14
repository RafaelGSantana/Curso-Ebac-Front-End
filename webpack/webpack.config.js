const path = require('path');
const HtmlWebpack = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
   entry: './src/index.js', // primeiro arquvio a ser processado
   // saída
   output: {
      filename: 'main.js', // Arquivo gerado a partir do index.js, podendo ser qualquer nome.js
      path: path.resolve(__dirname, 'dist') // Local onde o arquivo main.js será salvo
   },
   module: {
      rules: [
         {
            test: /\.(sa|c|sc)ss/,
            use: [
               MiniCssExtractPlugin.loader,
               'css-loader',
               'sass-loader'
            ]
         },
         {
            test: /\.css$/i,
            use: [
               'style-loader',
               'css-loader'
            ]
         },
         {
            test: /\.js$/i,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['@babel/preset-env']
               }
            }
         },
         {
            test: /\.(jpe|jp|pn|sv)g|gif$/i,
            use: {
               loader: 'file-loader',
               options: {
                  name: '[name].[ext]'
               }
            }
         }
      ]
   },
   plugins: [
      new HtmlWebpack({
         filename: 'index.html', // arquivo html empacotado gerado
         template: './src/index.html', // arquivo que será utilizado para gerar o arquivo index.html empacotado
      }),
      new MiniCssExtractPlugin({
         filename: 'styles.css'
      })
   ]
}