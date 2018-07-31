
function debug(write) {
    if (write === undefined) {
        write = 'undefined'
    } else if (write === "") {
        write = '""'
    }
    var debug = document.getElementById('debug')
    debug.innerHTML = write
}