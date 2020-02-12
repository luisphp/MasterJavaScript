var socket = io.connect('http://192.168.1.5:6677',{'forceNew':true});


socket.on('messages', function(data){
	console.log(data);
});