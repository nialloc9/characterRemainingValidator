# characterRemaining
This is character remaining that was created to be reused over and over by anyone. Please look at the screenshot folder to see screenshots of this project working.

# Instructions
1. Make sure jQuery is available to use in your project.
2. Include the public/js/charCountDown.js file in your project.
3. Give your input a suitable class name.
4. Give your message area a suitable class name.
5. Call the following function.

        updateCountdown(max, userInputClass, extendedMessage, countdownAreaClass);
        

# Function Parameters

max: The maximum number of characters allowed.

userInputClass: The name of the input class.

extendedMessage: Optional parameter for extended messages. e.g ' characters remaining.' will print out '?? characters remaining.'

countdownAreaClass: The class name of the element you want the message to appear in.

# Example

          <!-- JS JQUERY -->
    <script type="text/javascript" src="public/lib/jquery.js"></script>

    <!-- JS CHARACTER COUNTDOWN -->
    <script type="text/javascript" src="public/js/charCountDown.js"></script>

    <!-- JS CUSTOM -->
    <script type="text/javascript">
        $(document).ready(function(){
            $('.message').change(function(){
                updateCountdown(140, 'message', ' characters remaining.', 'countdown')
            });
            $('.message').keyup(function(){
                updateCountdown(140, 'message', ' characters remaining.', 'countdown')
            });
        });
    </script>
    
