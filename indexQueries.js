let express = require('express');

var app = express();


app.get('/api/stuff', function (req, res, next) {
    req.query // <- Is an object
    //The keys of the object come from the URL after the ?
    //Which URL, the actual url used to invoke

    //What the keys for the following URLs, and what will their values be

    //http://someurl.com/api/stuff?name=bob&species=skull
    req.query.name  //Bob
    req.query.species   //Skull


    //http://someurl.com/api/stuff?name=fuego&element=fire&power=11
    req.query.name  //fuego
    req.query.element   //fire
    req.query.fire.power    //11
})

app.get('/api/clothing/:category', function (req, res, next) {
    //Identify all the data you can get out of the URL

    //http://someurl.com/api/clothing/socks?color=purple
    req.params.clothing // socks
    req.query.color //purple


    //http://someurl.com/api/clothing/shirts?size=medium&fabric=cotton&animal=wolf
    req.params.category //shirts
    req.query.size //medium
    req.query.fabric //cotton
    req.query.animal //wolf
})