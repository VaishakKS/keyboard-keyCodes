$(document).ready(function() {
    $(this).keydown(function(e) {
        $('.key').addClass('key-animate');
        let keyCode = e.code;
        console.log(e)
        let codes = keyCode.match(/[A-Z][a-z]+/g);
        if (codes && codes.length >= 2) {
            $('.key-select-text').text(`keyCode: ${codes.join(' ')}`);
            $('.key-name').text(`Key pressed: ${e.key}`);
            $('.key-code').text(`Code: ${e.keyCode}`);
        } else {
            $('.key-select-text').text(`keyCode: ${e.code}`);
            $('.key-name').text(`Key pressed: ${e.key}`);
            $('.key-code').text(`Code: ${e.keyCode}`);
        }
        setTimeout(() => {
            $('.key').removeClass('key-animate');
        },50);
    });
});