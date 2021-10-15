const documentsToPdf = require('./documentsToPdf');

function routerApi(app){
    app.use('/pdf', documentsToPdf);
}

module.exports= routerApi;