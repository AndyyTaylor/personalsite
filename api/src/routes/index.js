
module.exports = function(app) {
    app.use('/v1', require('./v1'));
}
