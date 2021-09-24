$(document).ready(function() {
    $(this).keydown(function(e) {
        function setKeyCodes(e) {
            $('.key-name').text(`Key pressed: ${e.key}`);
            $('.key-code').text(`Code: ${e.keyCode}`);
        }
        $('.key').addClass('key-animate');
        let keyCode = e.code;
        let codes = keyCode.match(/[A-Z][a-z]+/g);
        if (codes && codes.length >= 2) {
            $('.key-select-text').text(`keyCode: ${codes.join(' ')}`);
            setKeyCodes(e);
        } else {
            $('.key-select-text').text(`keyCode: ${e.code}`);
            setKeyCodes(e);
        }
        setTimeout(() => {
            $('.key').removeClass('key-animate');
        },50);
    });
});