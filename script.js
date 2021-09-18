$(document).ready(function() {
    $(this).keydown(function(e) {
        $('.key').addClass('key-animate');
        let keyCode = e.code;
        let codes = keyCode.match(/[A-Z][a-z]+/g);
        if (codes && codes.length >= 2) {
            $('.key-select-text').text(codes.join(' '));
        } else {
            $('.key-select-text').text(e.code);
        }
        setTimeout(() => {
            $('.key').removeClass('key-animate');
        },50);
    });
});