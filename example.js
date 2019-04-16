var net = require('net');
var ur = require('./ur.js');


var host = '134.103.112.103';
var port = 30001;
var samples = 5;

var tmp     = 0;

var client = new net.Socket();
client.connect(port, host, function() {
	console.log('Connected to RTDE on ' + host + ':' + port);
});

client.on('data', function(data) {
    var ur10 = new ur();
    var res = ur10.onData(data);
    if(res !== undefined){
        console.log(res);
    }
    if(tmp >= samples){
        client.destroy();
    }
    tmp++;	
});

client.on('close', function() {
	console.log('Connection closed');
});