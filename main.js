var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var ytplayer = document.getElementById("movie_player");
var playlist_index = document.getElementById("playlist-current-index");

ytplayer.addEventListener("onStateChange", "onVideoPlaying");
function onVideoPlaying(){
    console.log("event triggered");
    if (ytplayer.getCurrentTime() >= 0.95 * ytplayer.getDuration()){
        console.log('Here I am!');
        setTimeout(onVideoPlaying,200);
    }
}
