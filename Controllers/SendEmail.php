<?php 

require_once '../Models/class.SendEmail.php';

if (isset($_POST['valid'])) {

	$fnSendEmail = new SendEmail($_POST['email'], $_POST['message']);

	echo $fnSendEmail->fnSendEmail();
}else{
	echo 'Error';
}

