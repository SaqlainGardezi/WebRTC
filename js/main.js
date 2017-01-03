'use strict';

navigator.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia;

var constraints={
	video:true,
	audio:false
};

var video=document.querySelector('video');

function successCallback(stream){
	window.stream=stream;
	if(window.URL){
		video.src=window.URL.createObjectURL(stream);
//stream.getVideoTracks()
	}
	else{
		video.src=stream;
	}
}


function errorCallback(error){
	console.log('navigator.getUserMedia error: ', error);
}

navigator.getUserMedia(constraints, successCallback, errorCallback);