// Faça o exercício dos parágrafos aqui
// Este arquivo ainda não está incluído no arquivo HTML
let parag = document.getElementsByClassName("botao-expandir-retrair");


for(let i in parag)
{
	parag[i].addEventListener("click", display);
	
}

function display()
{
	if(this.innerHTML === "+")
	{
		this.innerHTML = "-";
	}
	else
	{
		this.innerHTML = "+";
	}
	this.parentElement.classList.toggle("expandido");
}