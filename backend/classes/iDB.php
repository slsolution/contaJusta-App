<?php

	interface iDB{
		
		// Contém a conexão ao banco;
		#protected $conexao;
		#protected $log;

		// Cria a conexão com o banco de dados;
		# Esta conexão será salva na variável de referência $conexao;
		# Retorna objeto;
		function conectar($host,$user,$pass,$db,$port);

		// Desconecta-se ao banco;
		#Retorno true ou false;
		function desconectar();
		
		// Faz consulta. Retorna true ou false;
		function consultar($query);


		// Printa na tela o log;
		function log();

		// Retorna instância da classe;
		public static function getInstance();


	}


?>