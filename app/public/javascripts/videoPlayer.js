if (flvjs.isSupported()) {
    let videoElement = document.getElementById('videoElement');
    let flvPlayer = flvjs.createPlayer({
        type: 'flv',
        url: 'ws://192.168.15.7:8000/live/STREAM_NAME.flv'
    });
    flvPlayer.attachMediaElement(videoElement);
    flvPlayer.load();
    flvPlayer.play();
    console.log("Estive aqui")
}
