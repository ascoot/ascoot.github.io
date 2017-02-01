<?php
	$phone = $_POST['phone'];
	$fp = fopen('formnewsletter.txt', 'a+');
	$savestring = $phone . "\n";
	fwrite($fp, $savestring);
	fclose($fp);
;?>
