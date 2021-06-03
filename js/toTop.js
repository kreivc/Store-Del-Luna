// SCROLL TO TOP
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}

function sendMessage(){
    alert("Thankyou for sending a message");
    return;
}