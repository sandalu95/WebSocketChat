var server = require('ws').Server;
var s = new server({port:5001});

s.on('connection',function(ws){
	ws.on('message',function(message){
		console.log("Recieved : "+message);
	
	if(message=="hello"){
		ws.send("hello there from server");
	}
	});
}); 