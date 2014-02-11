var cheerio = require('cheerio'),
    request = require('request');

// YOUR_WIKIS_URL will be something like 192.168.1.151
var baseUrl = "http://YOUR_WIKIS_URL/"

// Get the HTML text of the starting room
var pageHtml = request({uri: baseUrl}, function(err, response, body) {
    //Just a basic error check
    if(err && response.statusCode !== 200){
        console.log('Request error.');
    }

    $ = cheerio.load(body);
    // let's stop the engine here and
    debugger;

});