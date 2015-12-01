<?php

/**
* Class Send Email
*/
class SendEmail
{
	private $email;
	private $message;
	public static $title;
	public static $headers;
	public static $addressee;
	public static $bodyHtml;

	function __construct($email, $message)
	{
		$this->email = $email;
		$this->message = $message;
	}

	public static function fnSendMessage($valueEmal, $valueMessage)
	{
		self::$title    = 'Mensaje de Contacto';

		self::$headers  = 'From: ' . $valueEmal . "\r\n" .
	    				  'Content-Type: text/html; charset=iso-8859-1' . "\r\n" .
	    	  			  'X-Mailer: PHP/' . phpversion();

	    self::$addressee = 'cembuenacreacion7@gmail.com';

	    self::$bodyHtml  = '<div style="background-color:#4B71AB; padding:10px;">
	    					<h2 style="color:#FFFFFF; font-size:30px; font-weight:100; line-height:115%; text-align:center;">
	    					Mensaje del contacto</h2></div>
	    					<div style="background-color:#F0F0F0; padding:40px;">
	    					<p>' .$valueMessage . '</p></div>';
	}

	public function fnSendEmail()
	{

		$this::fnSendMessage($this->email, $this->message);

		if (mail(self::$addressee, self::$title, self::$bodyHtml, self::$headers)) {
			header('location: ../index.html');
		} else {
			header('location: ../index.html');
		}

	}

}
