module.exports = function () {
    const mongoose = require('mongoose');
    const databaseName = 'whiteboar-cs5610-fall-2018';
    var connectionString =
        'mongodb://localhost/';
    connectionString += databaseName;
    const herokuURL = 'mongodb://kodefear:kodefear1602@ds031681.mlab.com:31681/white-board';
    mongoose.connect(herokuURL).then((result) => {
        console.log(result)
    }).catch( err => {
        console.log("Not Connected " + err);
    });

    process.on('SIGINT', function() {
        mongoose.connection.close(function () {
            console.log('Mongoose disconnected on app termination');
            process.exit(0);
        });
    });
};
