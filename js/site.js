var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";

var player;
function onYouTubeIframeAPIReady(){
	player = new YT.player("player",{

	playerVars: {
		"autoplay":0,
		"controls":1
	},
	events: {

	}
	});
}

function onPlayerReady(event){
	
}