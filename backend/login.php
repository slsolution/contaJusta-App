<?php
	if (isset($_POST['usuario']) && isset($_POST['senha']) ) {
		echo '{
			"acesso": "permitido",
			"idUsuario": 95
		}';
	}
?>