<?php
$text = str_replace("\n.", "\n..", $text);
?>
mail(
    string $to,
    string $subject,
    string $message,
    array|string $additional_headers = [],
    string $additional_params = ""
): bool
mail()
<?php
    ini_set('display_errors',1);
    error_reporting( E_ALL);
    ?from = "emailtest@YOURDOMAIN";
    ?to = 
    ?subject = 
    ?message =
    ?headers = "From:" . $from;
    mail($to,$subject,$message, $headers);
    echo "Test email sent";
?>