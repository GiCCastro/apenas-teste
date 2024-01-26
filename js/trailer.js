document.addEventListener("DOMContentLoaded", function() {

    const openTrailerBtn = document.getElementById("openTrailerBtn");
    const trailerModal = document.getElementById("trailerModal");
    const youtubePlayerContainer = document.getElementById("youtubePlayer");
    let player; 

    const closeModal = document.querySelector(".close");
    closeModal.addEventListener("click", function() {
        trailerModal.style.display = "none";
        if (player) {
            player.pauseVideo(); 
        }
    });

    function loadYouTubeVideo(videoId) {
        player = new YT.Player('youtubePlayer', {
            height: '390',
            width: '640',
            videoId: videoId,
            playerVars: {
                'controls': 0,
                'rel': 0,
                'modestbranding': 1,
                'autoplay': 1
              },
            events: {
                'onReady': onPlayerReady
            }
        });
    }

    function onPlayerReady(event) {
    }

    openTrailerBtn.addEventListener("click", function() {
        trailerModal.style.display = "block";
        loadYouTubeVideo('S2_aWPGZwhs');
        
        if (player) {
            player.playVideo();
        }
    });

});
