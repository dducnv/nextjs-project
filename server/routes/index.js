const apiRoute = require('../routes/api')
function routes(app) {
    app.use('/api/youtube',apiRoute);
};

module.exports = routes;