
let datas

fetch("https://swapi.co/api/people/")
.then(response =>  
	//Este response me regresa un JSON 
    response.json())

.then(json => {
    datas = json
   
    console.log(datas.results)

})