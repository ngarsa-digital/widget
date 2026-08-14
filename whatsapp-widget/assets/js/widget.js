// widget whatsapp
let floatingBubble = document.getElementById('floating-bubble'),
    floatingClose = document.getElementById('floating-button'),
    textChatSend = document.getElementById('textarea-send-chat'),
    floatingStyle = document.getElementsByClassName('floating');

let styleFunction = function (style) {
    for (let index = 0; index < floatingStyle.length; index++) {
        floatingStyle[index].style.display = style;
    }
}

let openNewTab = function (url) {
    let win = window.open(url, '_blank');
    win.focus();
}

floatingBubble.addEventListener('mouseover', function () {
    styleFunction('flex');
}, false);

floatingBubble.addEventListener('click', function () {
    styleFunction('flex');
}, false);

floatingClose.addEventListener('click', function () {
    styleFunction('none');
}, false);

textChatSend.addEventListener('click', function () {
    let textChat = document.getElementById('textarea-chat').value;
    let encodeText = encodeURI(textChat);
    openNewTab('https://wa.me/6281380000?text=' + encodeText + '');
}, false);