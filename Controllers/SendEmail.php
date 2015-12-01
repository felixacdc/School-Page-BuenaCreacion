<?php

require_once '../Models/class.SendEmail.php';

if (isset($_POST['valid'])) {

	$fnSendEmail = new SendEmail(trim(stripslashes($_POST['email'])), trim(stripslashes($_POST['message'])));

	echo $fnSendEmail->fnSendEmail();
}else{
	echo 'Error';
}
