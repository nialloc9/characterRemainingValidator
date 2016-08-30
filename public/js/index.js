$(document).ready(function(){
    $('.message').change(function(){
        updateCountdown(140, 'message', ' characters remaining.', 'countdown')
    });
    $('.message').keyup(function(){
        updateCountdown(140, 'message', ' characters remaining.', 'countdown')
    });
});