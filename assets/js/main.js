
$(document).ready( function(){
	/*función que imprime el mensaje ingresado*/
	$('#iconMensaje').click(function(){
		var mensaje=$('#inputMensaje').val();
		$('#contenedorMensaje').append('<div id="mensajeUsuario">'+mensaje+'</div>' );
	});

	$('#inputMensaje').keyup(function(){
		var mensaje=$('#inputMensaje').val();
		$('#contenedorMensaje').append('<div id="mensajeUsuario">'+mensaje+'</div>' );
	});

/*función que reemplaza la info del usuario con quien quiero conversar*/
	$("[id='fotoUsuario']").click(function(){
		$('<div id="conectado" class="col-md-8"><div class="row"><div class="col-md-2"><img src="assets/image/mariana.jpg"></div><div class="col-md-6"><h5>Laboratoria Perú</h5><p>Mariana Costa</p></div><div class="col-md-2"><i class="fa fa-paperclip"></i></div><div class="col-md-2"><i class="fa fa-ellipsis-v"></i></div></div></div>').replaceAll('#conectado');
	});
});