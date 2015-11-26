<?php 

/**
* Class Send Email
*/
class SendEmail 
{
	private $email;
	private $message;
	private $title;

	function __construct($email, $message)
	{
		$this->email = $email;
		$this->message = $message;
		$this->title = 'Mensaje Contacto de colegiobuenacreacion.reu.gt';
	}

	public function fnSendEmail(){

		if (mail($this->email, $this->title, $this->message)) {
			return 'si se envio';
		} else {
			return 'no se envio';
		}
		
	}

}
