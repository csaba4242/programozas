/*function kiiras(){
	var p = document.getElementsByTagName('p')[0].innerHTML
	console.log(p)
	var inputvalue = document.getElementById('elso').value
	console.log(inputvalue)
}*/
var szamlalo = 0
setTimeout(function(){
	var zoldseg = document.getElementsByClassName("zoldseg").length
	var gyumolcs = document.getElementsByClassName("gyumolcs").length
	document.getElementById("szamlalo").innerHTML="a boltunkban "+zoldseg+" zoldseg es "+gyumolcs +" gyumolcs talalhato "
	if (localStorage.getItem('kosar')!=0) {
		szamlalo= Number(localStorage.getItem('kosar'))
		document.getElementById ("kosar").innerHTML="a kosarban "+szamlalo+" termek van" 
	}
},500)
function hozzaadas(termek){
	szamlalo +=1
	document.getElementById ("kosar").innerHTML="a kosarban "+szamlalo+" termek van" 
 	localStorage.setItem('kosar' ,szamlalo)
}

