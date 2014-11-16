var express = require('express'),
    bodyParser = require('body-parser'),
    multer = require('multer'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    MongoStore = require('connect-mongo')(session),
    looger = require('morgan'),
    path = require('path'),
    methodOverride = require('method-override'),
    image = require('../routes/image'),
    app = express();

// setting up template engine
app.set('port', process.env.PORT | 3000);

//app.use(logger('combined', {stream: httpLogFile}))
app.use(bodyParser.json());
app.use(multer({
    dest: path.join(__dirname, '../public/assets/images/uploads'), 
    fileSize: 1000,
    onFileUploadStart: function (file) {
        console.log("file starts to upload");
    }}));
app.use(methodOverride());
app.use(cookieParser());
app.use(image);

app.listen(app.get('port'), function () {
	console.log("server now listen to port", app.get('port'));
});
