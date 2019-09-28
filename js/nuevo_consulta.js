
let datas

fetch("https://swapi.co/api/people/")
.then(response =>  
	//Este response me regresa un JSON 
    response.json())

.then(json => {
    datas = json
    
    let list = ""
    let tabla = ""
    for (var i in datas.results) {
        console.log(datas.results[i].name)
       list += `<option> ${datas.results[i].name} </option>`
       tabla += `<tr>`
       tabla += `<td> ${datas.results[i].name}</td>`  
       tabla += `<td>${datas.results[i].hair_color}</td>` 
       tabla += `<td>${datas.results[i].birth_year}</td>`
       tabla += `</tr>`          
    }
    document.getElementById("listado").innerHTML=list;
    document.getElementById("tabla").innerHTML=tabla;
    //userList.querySelectorAll(".tabla").innerHTML=tabla;
    document.getElementById("listados").innerHTML=tabla;

    var i=0
   while (i<datas.results.length) {
    console.log(datas.results[i].hair_color)
       i++
   }
})