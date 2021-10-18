const documentsToPdf = require('./documentsToPdf');
const FrontendDetails = require('./FrontendDetails');

function routerApi(app){
    app.use('/pdf', documentsToPdf);
    app.use('/api',FrontendDetails);
}

module.exports= routerApi;