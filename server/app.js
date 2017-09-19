var express = require('express');
var path = require('path');
var http = require('http')
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
var aes256 = require('aes256');

/**connection of mongoose with mongodb......... */
/**uses local as db....... */
mongoose.connect('mongodb://localhost/test', {
  useMongoClient: true

});
mongoose.set('debug', true)


var app = express();

//define routes above body parser
var index = require('./routes/index');
var api = require('./routes/api');
var admin = require('./routes/admin');
var property = require('./routes/property');
console.log("i am in appppppppppppppppppppppppppppppppppppppppppppppppppp");



// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, './../public/dist'))); //dist

app.use('/', index);
app.use('/admin', admin)
app.use('/api', api);
app.use('/property', property);


// Send all other requests to the Angular app
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, './../public/dist/index.html'));    //dist/index.html
// });




//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));

module.exports = app;