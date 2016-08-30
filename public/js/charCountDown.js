//SINGLE USER INPUT
function updateCountdown(max, userInputClass, extendedMessage, countdownAreaClass) {
    //ASSIGN VARIABLES
    var ui = '.' + userInputClass;
    var area = '.' + countdownAreaClass;

    var remaining = max - $(ui).val().length;

    //ADD REMAINING
    $(area).text(remaining + extendedMessage);
}