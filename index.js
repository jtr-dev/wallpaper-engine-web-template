var audioArray = [];

function wallpaperAudioListener(audioArr) {
    audioArray = audioArr;
}

window.onload = function () {
    window.wallpaperRegisterAudioListener(wallpaperAudioListener);
}


function loop() {
    if (audioArray[0] !== undefined) {
        audioArray.map((beat, i) => {
            if (i <= 2) {
                debug(beat, i)
            }
        })
    }
}


setInterval(loop)
