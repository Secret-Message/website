var DownloadText = "Pobierz aplikację";
if (navigator.appVersion.indexOf("Win") != -1) DownloadText = "Pobierz dla systemu windows";
if (navigator.appVersion.indexOf("Mac") != -1) DownloadText = "Pobierz dla systemu Mac OS";
if (navigator.appVersion.indexOf("Linux") != -1) DownloadText = "Pobierz dla systemu Linux";
document.getElementById("download-os").innerHTML = DownloadText;

const _content = ["Bezpieczne rozmowy", "Szybki support", "Customowe plany płatności", "Czaty voice", "Tego szukasz?", "Wybierz Secret Message!"];
var _part = 0;
var _charIndex = 0;
var _typingElem = document.getElementById("typing-animation");
var _interval;

// settings
const typing_speed = 100;
const deleting_speed = 50;
const between_time = 1000;
const empty_time = 200;
const cursor = "_";
var _repeat = true;

function Type() {
    var text = _content[_part].substring(0, _charIndex + 1);
    _typingElem.innerHTML = text + cursor;
    _charIndex++;

    if (text == _content[_part]) {
        clearInterval(_interval);
        if (_part == _content.length - 1 && !_repeat) return;
        setTimeout(() => {
            _interval = setInterval(Delete, deleting_speed);
        }, between_time);
    }
}

function Delete() {
    var text = _content[_part].substring(0, _charIndex - 1);
    _typingElem.innerHTML = text + cursor;
    _charIndex--;

    if (text == '') {
        clearInterval(_interval)

        if (_part == _content.length - 1)
            _part = 0;
        else
            _part++;

        _charIndex = 0;

        setTimeout(() => {
            _interval = setInterval(Type, typing_speed);
        }, empty_time);
    }
}

_interval = setInterval(Type, typing_speed);
