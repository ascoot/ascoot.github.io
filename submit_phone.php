<?php
	$phone = $_POST['phone'];
	$fp = fopen('formdata.txt', 'a+');
	$savestring = $phone . "\n";
	fwrite($fp, $savestring);
	fclose($fp);
;?>
