let data

fetch("https://swapi.co/api/people/1/")
  .then(response =>  
	//Este response me regresa un JSON 
    response.json())
  .then(json => {
    data = json
    return fetch('https://swapi.co/api/films/2/')
  })
  .then((response) => response.json())
  .then(json => {
    data.films = json
    //console.log(`${data.name} su merjor amigo es ${json.name}, código con FETCH`)
    //console.log(`${data.name} su merjor amigo es ${data.homeworld.name}, codigo con igualdad de objeto con FETCH`)
    var datos = `${data.name} su merjor amigo es ${json.name}, código con FETCH`;
    document.getElementById("mostar").innerHTML=datos;
    document.getElementById("titulo").innerHTML=data.films.title;
    document.getElementById("btn1").innerHTML=json.name;
  })
.catch((err) => handleError(err))