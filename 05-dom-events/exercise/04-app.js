function encodeAndDecodeMessages() {
    const main = document.getElementById('main');
    const senderArea = main.querySelectorAll('textarea')[0];
    const receiverArea = main.querySelectorAll('textarea')[1];
    const encodeBtn = main.querySelectorAll('button')[0];
    const decodeBtn = main.querySelectorAll('button')[1];
    encodeBtn.addEventListener('click', encodeAndSend)
    decodeBtn.addEventListener('click', decodeAndRead)
    function encodeAndSend(e) {
        let msg = senderArea.value.split(``);
        let newMsg = msg.map(a => {
            return String.fromCharCode(a.charCodeAt(0) + 1);
        });
        receiverArea.value = newMsg.join('');
        senderArea.value = ``;
    }
    function decodeAndRead(e) {
        let msg = receiverArea.value.split(``);
        let newMsg = msg.map(a => {
            return String.fromCharCode(a.charCodeAt(0) - 1);
        });
        receiverArea.value = newMsg.join('');
    }
}
