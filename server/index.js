var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var app = express();

app.use(express.static(__dirname + '/../client/public'));
app.use(expressLayouts);

app.set('views', __dirname + '/../client/views');
app.set('view engine', 'ejs');

// Registering views
app.get('/',                        function(req, res) { res.render('index',                    { page: 'index', title: 'Le gîte à Roscanvel' }); });

app.listen(7500, function () {
    console.log('Listening on port 7500.');
});
