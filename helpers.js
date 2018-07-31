function debug(...args) {
    var debug = document.getElementById('debug')
    debug.innerHTML = ""
    args.map(function (arg) {
        if (arg === undefined || arg === "" || arg === " ") {
            arg = `""`
        }
        debug.innerHTML += arg + " "
    })
}

function showArray(audioArr) {
    var elements = " "
    audioArr.map((ele, i) => {
        // elements += i + ": " + ele.toFixed(2) + " || "
        elements += `<b>[${i}]: </b> <span style="font-size: 23px">${ele.toFixed(2)} </span>`
    })
    debug(elements)
}

function randomIntInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function volume(arr) {
    return arr.reduce(function (a, b) {
        return a + b
    })
}

function sliceAudio(audioArr, size = 4) {
    var chunk = []
    var divide = audioArr.length / size

    for (var i = 0; i < size; i++) {
        let pos = audioArr.slice(divide * i, divide * (i + 1))
        chunk.push(volume(pos))
    }

    return chunk
}

function percentageOfRange(input, min, max) {
    return Math.floor(((input - min) * 100) / (max - min))
}

function toDegrees(angle) {
    return angle * (180 / Math.PI);
}
function toRadians(degree) {
    return degree * (Math.PI / 180);
};
