<?php
	include_once 'config.php';

	$nome = isset($_POST['nome'])?$_POST['nome']:false;
	$usuario = isset($_POST['usuario'])?$_POST['usuario']:false;
	$senha = isset($_POST['senha'])?$_POST['senha']:false;
	$email = isset($_POST['email'])?$_POST['email']:false;

	if ($nome && $usuario && $senha && $email) {
		$consulta = $conexao->consultar("INSERT INTO `usuario`(`usuario`, `senha`, `nome`, `email`) VALUES ('$usuario','$senha','$nome','$email')");
		if ($consulta) {
			echo '{
						"status":"sucesso",
						"msg":"Usuário cadastrado com sucesso."
					}';
		}else{
			echo '{
						"status":"falha",
						"msg":"Não foi possível cadastrar usuário."
					}';
		}
	}else{
		echo '{
			"status":"falha",
			"msg":"Parâmetros inválidos."
		}';
	}

	$conexao->desconectar();
?>