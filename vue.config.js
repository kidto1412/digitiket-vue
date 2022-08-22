module.exports = {
  transpileDependencies: ['vuetify'],
  devServer: {
    // proxy: 'https://digitiket.id/',
    // proxy: 'http://localhost:4000/',
    proxy: 'http://172.16.1.157:8002',
  },
}
