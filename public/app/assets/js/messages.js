var socket = io();
/*socket.on('connection', function (socket) {

});*/

socket.on('mouvement', function(data){
	console.log('ligne : ' + data.ligne);
	console.log('col : ' + data.col);
});
