var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var app = express();

app.use(express.static(__dirname + '/../client/public'));
app.use(expressLayouts);

app.set('views', __dirname + '/../client/views');
app.set('view engine', 'ejs');

// Registering views
app.get('/',                        function(req, res) { res.render('index',                    { page: 'index', title: 'Le gîte à Roscanvel' }); });
app.get('/le-gite',                 function(req, res) { res.render('le-gite',                  { page: 'gite', title: 'Le gîte à Roscanvel' }); });
app.get('/roscanvel',               function(req, res) { res.render('roscanvel',                { page: 'rosc', title: 'Roscanvel' }); });
app.get('/presqu-ile-crozon',       function(req, res) { res.render('presqu-ile-crozon',        { page: 'pres', title: 'La Presqu\'île de Crozon' }); });
app.get('/reserver',                function(req, res) { res.render('reserver',                 { page: 'book', title: 'Réserver' }); });
app.get('/contact',                 function(req, res) { res.render('contact',                  { page: 'cont', title: 'Contact' }); });


app.listen(7500, function () {
    console.log('Listening on port 7500.');
});
