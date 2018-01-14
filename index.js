var express = require("express");
var request = require("request");
var bodyParser = require("body-parser");
var MapboxClient = require('mapbox');
var client = new MapboxClient('sk.eyJ1IjoicGFwcHVzc3AxIiwiYSI6ImNqYndrZ3RrMTI2eDIzM3BjaXFtY2gzdmcifQ.B2sQFFPWo5tBrvcsL9cDVQ');

var app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.listen((process.env.PORT || 5000));

app.get("/", function (req, res) {
  res.send("Deployed!");
});
app.post('/', function(req, res) {
var credentials = {{
  "tileset": "pappussp1.cjbwkjod422u233nx1xp8ltzr-8kury",
  "url": "mapbox://datasets/pappussp1/cjbwkjod422u233nx1xp8ltzr",
  "name": "Player_Base"
};
client.createUpload({
   tileset: ["pappussp1", 'cjbwkjod422u233nx1xp8ltzr-8kury'].join('.'),
   url: credentials.url
	}, function(err, upload) {
  console.log(upload);
		});
	});
});