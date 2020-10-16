

document.querySelector('button').onclick= myVal;
function myVal(){

	let pasVal=document.querySelector('#pass').value;
	if(pasVal.charAt()==" "||pasVal.length<8){
		alert("Пароль не должен содержать пробелы и быть менее 8 символов");

	}
	else{
	
		
}
}