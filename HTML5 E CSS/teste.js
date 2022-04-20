/*function  getAdmin(map) {

	let admins = [];
	for ([key,value] of map) {
		if(value === "adimin"){
			admins.push(key);
		}
	}
	return admins;
}

const usuarios = new Map();

usuarios.set("borges","carro");
usuarios.set("bruno", "adimin");
usuarios.set("catia", "adimin");
usuarios.set("pinheiro", "adimin");




console.log(getAdmin(usuarios))*/

/*const myArrays = [30,30,40,6,223,2848,3034,5];

function valueArrays(Arr) {
	const mySet = new Set(Arr);

	return mySet
}

console.log(valueArrays(myArrays), myArrays)*/

/*function validaArray(arr,num){
	try {
		if(!arr && !num) throw new ReferenceError("envie os parametros");

		if(typeof arr !== 'obect') throw new typeError("Array precisa ser do tipo obeject");

		if(typeof num !== 'number') throw new typeError("Array precisa ser do tipo number");

		if(arr.length !== num) throw new rangerError("tamanho invalido");

		return arr;
	} catch(e) {
		// statements
		if(e instanceof ReferenceError){
			
		}
	}
}*/

/*
const BASE_URL = 'https://thatcopy.pw/catapi/'
const btn = document.getElementById()

const getcats = async () => {

	const data = await fetch(BASE_URL);
	const json = await data.json();

	return json.webpurl;
}

const loadImg = async () => {
	img.src = await getcats();
}

catbtn.addEventListener('click', loadImg);
*/

/*let line = gets().split("");
let X = parseInt(line[0]);
let Y = parseInt(line[1]);

console.log(X +" , " + Y)*/

////////////////MAP/////////////////
/*Array.map(callback, thisArg);
callback: a função que vai ser executada em cada elemento.
thisArg(opcional):valor de 'this' dentro da função callback.
const array = [1,2,3,4,5]
array.map((item) => item * 2)
*/

////////////////FILTER//////////////
/*Array.filter(callback, thisArg);
callback: função a ser executada em cada elemeto.
thisArg(opcional):valor de 'this' dentro da função callback.
const frutas = ['maca fuji', 'maca verde', 'laranja', abacaxi]

frutas.filter(() => fruta.includes('maca'))

*/////////////////REDUCE//////////////

////////////////REDUCE//////////////
/*Array.reduce(callback, initialvalue);
callback: função a ser executada a partir do acumulador
initialvalue(opcional): valor sobre qual o retorno final atuar
const calBackFn = function(accumulator, currentValue, index, array){

}
Array.reduce(calBackFn, initialvalue);
*/

/////EXEMPLO DE MAP///
/*const maca ={
	value : 2,
}
const laraja ={
	value : 3,
}
function mapComThis(arr,thisArg){
	return arr.map(function(item){
		return item * this.value;
	}, thisArg);
}

const ray = [1,2];

console.log(mapComThis(ray, maca));*/

/////////////////////////EXEMPLO DE FILTER/////////////////////////////////////////////////////
/*function filtraPares(arr){
	return arr.filter(callback)
}
function callback(item){
	return item % 2 !== 0;
}

const myArrays = [1,2,3,4,5,6,7,8,9];

console.log(filtraPares(myArrays))*/

////////////////////////////////////EXEMPLO DE REDUCE///////////////////////////////////////////

/*function somaNum(arr) {
	
	return arr.reduce(function(prev, current){
		return prev + current;
	})
}
const arr = [1,2]

console.log(somaNum(arr));

const lista = [
	{
		name: 'sabao em po',
		valor: 10
	},
	{
		name: 'cereal',
		valor: 20
	},
	{
		name: 'toalha',
		valor: 30
	}]

const saldo = 100;

function calc(saldo, lista) {
	return lista.reduce(function (prev, current) {
		return prev - current.valor
	}, saldo);
}

console.log(calc(saldo, lista));*/






function changeMode() {
	changeClasses();
	changeText()
}
function changeClasses() {
	btn.classList.toggle('dark-Mode');
	h1.classList.toggle('dark-Mode');
	body.classList.toggle("dark-Mode");
	footer.classList.toggle('dark-Mode');
}

function changeText() {
	if(btn.classList.contains('dark-Mode')){
		btn.innerText = "Light Mode";
		h1.innerText = "Dark Mode On" ;
	}else{
		btn.innerText = "Dark Mode";
		h1.innerText = "Light Mode On";
	}
}


const btn = document.getElementById("button");
const h1 = document.getElementById("title");
const body = document.getElementsByTagName("body")[0];
const footer = document.getElementsByTagName("footer")[0];

btn.addEventListener('click', changeMode);


