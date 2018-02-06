<?php

    // Get the form fields, removes html tags and whitespace.
    $name = strip_tags(trim($_POST["name"]));
    $name = str_replace(array("\r","\n"),array(" "," "),$name);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $anzahl = trim($_POST["anzahl-gaeste"]);
    $gaeste = trim($_POST["gaeste"]);
    $music = trim($_POST["music"]);
    $comment = trim($_POST["comment"]);


    // Check the data.
    if (empty($name) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: http://www.saelsa.github.io/paulina&lukas/index.php?success=-1#form");
        exit;
    }

    // Set the recipient email address. Update this to YOUR desired email address.
    $recipient = "";

    // Set the email subject.
    $subject = "Absage von $name";

    // Build the email content.
    $email_content = "Ich muss leider absagen\n";
    $email_content .= "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Anzahl Gaeste: $anzahl\n";
    $email_content .= "Namen der weiteren Gaeste: $gaeste\n";    
    $email_content .= "Musikwunsch: $music\n";    
    $email_content .= "Kommentar: $gcomment\n";


    // Build the email headers.
    $email_headers = "From: $name <$email>";

    // Send the email.
    mail($recipient, $subject, $email_content, $email_headers);
    
    // Redirect to the index.html page with success code
    header("Location: http://www.saelsa.github.io/paulina&lukas/index.php?success=1#form");

?>