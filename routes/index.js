const documentsToPdf = require('./documentsToPdf');
const FrontendDetails = require('./FrontendDetails');

function routerApi(app){
    app.use('/pdf', documentsToPdf);
    app.use('/contracts',FrontendDetails);
}

module.exports= routerApi;