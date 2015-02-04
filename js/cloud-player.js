var SecondsTohhmmss = require('./SecondsTohhmmss.js');

/**
 * Cloud Player module
 * Initializes the soundcloud player.
**/

var CloudPlayer = function () {

SC.initialize({
    client_id: '522eef33018b0f73bf8a64f55df40ccc'
});

var d = document.getElementById("audio-test"); 

SC.get("/tracks/178345187", {}, function(sound){
    d.setAttribute("src", sound.stream_url + "?client_id=522eef33018b0f73bf8a64f55df40ccc");
});


};

module.exports = CloudPlayer;