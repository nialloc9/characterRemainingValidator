function updateCountdown(max, userInput, extendedMessage, countdownAreaClass) {
    //ASSIGN VARIABLES
    var ui = '.' + userInput;
    var area = '.' + countdownAreaClass;

    var remaining = max - $(ui).val().length;

    //ADD REMAINING
    $(area).text(remaining + extendedMessage);
}