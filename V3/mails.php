<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $from = 'From: Wordica'; 
    $to = 'seo_poczta@wp.pl'; 
    $subject = 'Hello this is tes email';

    $body = "From: $name\n E-Mail: $email\n Message:\n $message";
	
	mail ($to, $subject, $body, $from);
	    

?>