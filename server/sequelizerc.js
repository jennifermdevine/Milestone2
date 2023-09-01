const  path = require('path')
require('dotenv').config()


module.exports= {
  'config': path.resolve('./server/config','config.js'),
  'models-path':path.resolve('./server','models'),
  'seeders-path':path.resolve('./server','seeders'),
  'migrations-path':path.resolve('./server','migrations')
}