function convertNumber() {
	const userNumber = parseInt(document.getElementById('input-num').value);

	let unidad;
	let decena;

	let dec = Math.floor(userNumber/10);
	let uni = userNumber - (dec*10);

	console.log(userNumber, dec, uni)

	if(userNumber < 0 || userNumber > 99){
		document.getElementById('resultado').innerHTML = 'Numero incorrecto'
		return;
	}

	switch(uni){
		case 0:
			unidad='Cero'; decena=''; break;
		case 1:
			unidad='Uno'; decena=''; break;
		case 2:
			unidad='Dos'; decena=''; break;
		case 3:
			unidad='Tres'; decena=''; break;
		case 4:
			unidad='Cuatro'; decena=''; break;
		case 5:
			unidad='Cinco'; decena=''; break;
		case 6:
			unidad='Seis'; decena=''; break;
		case 7:
			unidad='Siete'; decena=''; break;
		case 8:
			unidad='Ocho'; decena=''; break;
		case 9:
			unidad='Nueve'; decena=''; break;
	}
	switch(dec){
		case 1:	
			switch(uni){
				case 0:
					decena='Diez'; unidad=''; break;
				case 1:
					decena='Once'; unidad=''; break;
				case 2:
					decena='Doce'; unidad=''; break;
				case 3:
					decena='Trece'; unidad=''; break;
				case 4:
					decena='Catorce'; unidad=''; break;
				case 5:
					decena='Quince'; unidad=''; break;
				default:
					decena='Dieci'; break;
			}
			break;
		case 2:
			if(uni === 0){
				decena='Veinte';
				unidad='';
			}else{
				decena='Veinti';
			}
			break;
		case 3:
			if(uni === 0){
				decena='Treinta';
				unidad='';
			}else{
				decena='Treinta y ';
			}
			break;
		case 4:
			if(uni === 0){
				decena='Cuarenta';
				unidad='';
			}else{
				decena='Cuarenta y ';
			}
			break;
		case 5:
			if(uni === 0){
				decena='Cincuenta';
				unidad='';
			}else{
				decena='Cincuenta y ';
			}
			break;
		case 6:
			if(uni === 0){
				decena='Sesenta';
				unidad='';
			}else{
				decena='Sesenta y ';
			}
			break;
		case 7:
			if(uni === 0){
				decena='Setenta';
				unidad='';
			}else{
				decena='Setenta y ';
			}
			break;
		case 8:
			if(uni === 0){
				decena='Ochenta';
				unidad='';
			}else{
				decena='Ochenta y ';
			}
			break;
		case 9:
			if(uni === 0){
				decena='Novennta';
				unidad='';
			}else{
				decena='Noventa y ';
			}
			break;
	}

	document.getElementById('resultado').innerHTML = decena + unidad
}