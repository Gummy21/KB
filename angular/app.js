const express = require('express'),
path = require('path'),
app = express();

// Serve the static files form the dist directory
app.use(express.static(__dirname + '/dist/KB'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/KB/index.html'));
});

app.listen(process.env.PORT || 8080);