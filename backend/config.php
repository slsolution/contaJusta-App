<?php

	function __autoload($class){

		$dir = "classes/";
		$file = $dir.$class.".php";
		if (file_exists($file)) {
			include_once $file;
		}
	}
	
	// Configuração banco de dados;
	$HOST = 'localhost';
	$USER = 'root';
	$PASS = '';
	$DB = 'contaJusta';

	$conexao = MySQL::getInstance();

	if( !$conexao->conectar($HOST,$USER,$PASS,$DB) ){ 
		exit('
			{
				"status":"falha",
				"msg":"Falha na conexao com o banco de dados."
			}
			');
		}
	
?>