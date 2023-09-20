/* Webpack */
// O webpack é usado para transformar código js, css e outros em código antigo para obter mais compatibilidade com os navegadores.

const path = require('path'); // CommonJS

module.exports = {
  mode: 'production', // modo do arquivo que será gerado (bundle.js), production = código sem espaços (minificado), development = código com espaços. 
  entry: './src/index.js', // Arquivo de entrada.
  output: { // Configurações do arquivo de saida (bundle.js).
    path: path.resolve(__dirname, 'public', 'assets', 'js'), // Caminho onde o arquivo será gerado, o caminho tem que ser absoluto, para isso usamos o módulo path, __dirname = diretório absoluto atual.
    filename: 'bundle.js' // Nome do arquivo.
  },
  module: {
    rules: [{ // Regras, regras é um array de objetos, cada objeto é uma regra de um tipo de arquivo, este objeto do exemplo é para arquivos js.
      exclude: /node_modules/, // Exclusão da pasta node_modules, assim ele não procura arquivos js lá dentro.
      test: /\.js$/, // Define para qual tipo de arquivo será esta regra.
      use: { // Configuração do babel
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env']
        }
      }
    }]
  },
  devtool: 'source-map' // Serve para sabermos em qual linha e arquivo ocorreu um erro, pois se não usarmos esta configuração os erros serão mostrados no arquivo de saida (bundle.js), desta forma fica muito complicado de saber onde ocorreu o erro nos arquivos ques estão sendo usados para criar o arquivo de saida (bundle.js).
};
