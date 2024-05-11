const Dotenv = require('dotenv-webpack');

module.exports = {
  // ... outras configurações
  plugins: [
    new Dotenv({
      path: './.env.development',
      systemvars: true,
    }),
  ],
};
