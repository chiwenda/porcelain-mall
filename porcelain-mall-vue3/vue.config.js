const { resolve } = require('path')
const path = require('path')
module.exports={
    devServer:{
        open:true
    },
    configureWebpack:{
        resolve:{
            alias:{
                '@':resolve('src'),
            }
        }
    }
}