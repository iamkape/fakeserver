

document.querySelector('button').onclick= myVal;
function myVal(){

	let pasVal=document.querySelector('#pass').value;
	if(pasVal.charAt()==" "||pasVal.length<8){
		alert("Пароль не должен содержать пробелы и быть менее 8 символов");

	}
	else{
	   let name = document.querySelector("#name").value;
	   let pass = document.querySelector("#pass").value;
	   let email = document.querySelector("#emailUser").value;
     fetch("https://my-json-server.typicode.com/posts",{
     	method:"POST",
     	body:JSON.stringify({
     		title:name,
     		password:pass,
     		email:email
     	}),
     	headers:{
     		"Content-Type":"application/JSON"
     	}
     })
  .then (function(response){
  	return response.JSON();
  })
  .then (function(data){
  	console.log(data);
  	let results = document.querySelector(".result");
  	results.innerHTML = data.title;
  })
		}
}